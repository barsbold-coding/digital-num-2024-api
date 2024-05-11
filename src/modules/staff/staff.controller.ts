import { Controller, Get, Options, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StaffService } from './staff.service';
import { QueryDto } from 'globals/dto/query.dto';

@ApiTags('staffs')
@Controller('staffs')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get('about')
  async getFind() {
    return '';
  }

  @Get()
  async findAll(@Query() query: QueryDto) {
    return await this.staffService.findAll(query);
  }

  @Get('options')
  async findOptions() {
    return await this.staffService.findOptions();
  }
}
