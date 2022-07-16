import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
const bcrypt = require('bcrypt');
import { Model } from 'mongoose';
import { Admin, AdminDocument } from './admin.schema';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

// injectable is use for call the service in another class (ex: the admin controller)
@Injectable()
export class AdminService {
  constructor(
    // inject model from schema
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const hash = await bcrypt.hashSync(createAdminDto.password, 8);
    const newAdmin = {
      email: createAdminDto.email,
      password: hash,
      role: 'admin',
      name: createAdminDto.name,
    };
    const createAdmin = new this.adminModel(newAdmin);
    const result = await createAdmin.save();
    if (!result) {
      return 'Something went wrong';
    } else return result;
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
