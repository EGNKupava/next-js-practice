import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    // `This action returns all users`
    return this.userRepository.find();
  }

  findOne(id: number) {
    // `This action returns a #${id} user`;
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // `This action updates a #${id} user`;
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    //`This action removes a #${id} user`;
    return this.userRepository.delete(id);
  }
}
