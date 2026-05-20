import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async submitContactRequest(data: any) {
    return this.prisma.contactRequest.create({ data });
  }

  async submitInquiry(data: any) {
    return this.prisma.inquiry.create({ data });
  }
}
