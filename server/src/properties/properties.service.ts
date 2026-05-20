import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePropertyDto, userId: string, files?: Array<Express.Multer.File>) {
    // When dealing with FormData, numbers might arrive as strings, so we must parse them
    const price = dto.price ? parseFloat(dto.price.toString()) : 0;
    const bedrooms = dto.bedrooms ? parseInt(dto.bedrooms.toString(), 10) : undefined;
    const bathrooms = dto.bathrooms ? parseInt(dto.bathrooms.toString(), 10) : undefined;

    const property = await this.prisma.property.create({
      data: {
        ...dto,
        price,
        bedrooms,
        bathrooms,
        createdById: userId,
        status: 'PUBLISHED', // Default to published for now
        publishedAt: new Date(),
      },
    });

    // If files were uploaded, create PropertyImage records
    if (files && files.length > 0) {
      const imageRecords = files.map((file, index) => ({
        propertyId: property.id,
        fileUrl: `/uploads/${file.filename}`,
        sortOrder: index,
      }));
      
      await this.prisma.propertyImage.createMany({
        data: imageRecords,
      });
    }

    return property;
  }

  async findAll(query: any) {
    const { type, listingType, city, minPrice, maxPrice, featured } = query;

    const where: any = {
      status: 'PUBLISHED',
    };

    if (type) where.propertyType = type;
    if (listingType) where.listingType = listingType;
    if (city) where.city = { contains: city, mode: 'insensitive' };
    if (featured) where.featured = featured === 'true';

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice);
      if (maxPrice) where.price.lte = parseFloat(maxPrice);
    }

    return this.prisma.property.findMany({
      where,
      include: {
        images: {
          orderBy: { sortOrder: 'asc' },
          take: 1,
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: {
        images: { orderBy: { sortOrder: 'asc' } },
        assignedAgent: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    return property;
  }

  async update(id: string, dto: UpdatePropertyDto, userId: string, role: string) {
    const property = await this.findOne(id);

    // Permission check: Only Creator or Admin can update
    if (property.createdById !== userId && role !== 'ADMIN') {
      throw new ForbiddenException('You do not have permission to update this property');
    }

    return this.prisma.property.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string, userId: string, role: string) {
    const property = await this.findOne(id);

    // Permission check: Only Creator or Admin can delete
    if (property.createdById !== userId && role !== 'ADMIN') {
      throw new ForbiddenException('You do not have permission to delete this property');
    }

    return this.prisma.property.delete({
      where: { id },
    });
  }

  async findFeatured() {
    return this.prisma.property.findMany({
      where: {
        featured: true,
        status: 'PUBLISHED',
      },
      include: {
        images: {
          orderBy: { sortOrder: 'asc' },
          take: 1,
        },
      },
      take: 6,
    });
  }

  async findRecent() {
    return this.prisma.property.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        images: {
          orderBy: { sortOrder: 'asc' },
          take: 1,
        },
      },
      orderBy: { publishedAt: 'desc' },
      take: 6,
    });
  }
}
