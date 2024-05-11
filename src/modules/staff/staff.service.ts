import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { QueryDto } from 'globals/dto/query.dto';
import { Staff } from 'models/staff.entity';

@Injectable()
export class StaffService {
  constructor(@InjectModel(Staff) private staffRepository: typeof Staff) {}

  async findAll(query: QueryDto) {
    return await this.staffRepository.findAll();
  }

  async findOptions() {
    return Object.keys(this.staffRepository.getAttributes());
  }
}
