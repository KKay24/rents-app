import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { multerConfig } from '../common/config/multer.config';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'AGENT')
  @UseInterceptors(FilesInterceptor('images', 5, multerConfig))
  create(
    @Body() createPropertyDto: CreatePropertyDto, 
    @GetUser('userId') userId: string,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    return this.propertiesService.create(createPropertyDto, userId, files);
  }


  @Get()
  findAll(@Query() query: any) {
    return this.propertiesService.findAll(query);
  }

  @Get('featured')
  findFeatured() {
    return this.propertiesService.findFeatured();
  }

  @Get('recent')
  findRecent() {
    return this.propertiesService.findRecent();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'AGENT')
  update(
    @Param('id') id: string, 
    @Body() updatePropertyDto: UpdatePropertyDto,
    @GetUser('userId') userId: string,
    @GetUser('role') role: string
  ) {
    return this.propertiesService.update(id, updatePropertyDto, userId, role);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'AGENT')
  remove(
    @Param('id') id: string,
    @GetUser('userId') userId: string,
    @GetUser('role') role: string
  ) {
    return this.propertiesService.remove(id, userId, role);
  }
}
