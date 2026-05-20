import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto, files: Express.Multer.File[]) {
    const car = await this.prisma.car.create({
      data: {
        ...createCarDto,
        year: Number(createCarDto.year),
        seats: Number(createCarDto.seats),
        pricePerDay: Number(createCarDto.pricePerDay),
        featured: String(createCarDto.featured) === 'true',
        images: {
          create: files.map((file) => ({
            fileUrl: `/uploads/${file.filename}`,
            altText: `${createCarDto.make} ${createCarDto.model}`,
          })),
        },
      },
      include: {
        images: true,
      },
    });
    return car;
  }

  async findAll() {
    return this.prisma.car.findMany({
      include: {
        images: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const car = await this.prisma.car.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  async update(id: string, updateCarDto: any) {
    return this.prisma.car.update({
      where: { id },
      data: updateCarDto,
    });
  }

  async remove(id: string) {
    return this.prisma.car.delete({
      where: { id },
    });
  }
}
