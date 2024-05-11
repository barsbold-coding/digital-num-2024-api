import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { Staff } from 'models/staff.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { StaffService } from './staff.service';

@Module({
  imports: [SequelizeModule.forFeature([Staff])],
  providers: [StaffService],
  controllers: [StaffController],
})
export class StaffModule {}
