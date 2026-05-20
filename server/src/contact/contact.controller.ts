import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  submitContact(@Body() data: any) {
    return this.contactService.submitContactRequest(data);
  }

  @Post('inquiry')
  submitInquiry(@Body() data: any) {
    return this.contactService.submitInquiry(data);
  }
}
