import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Staff } from 'models/staff.entity';

@Injectable()
export class StaffService {
  constructor(@InjectModel(Staff) private staffRepository: typeof Staff) {}

  async findAll() {
    return await this.staffRepository.findAll();
  }
}
