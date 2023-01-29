import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetEntity } from 'src/Budget/entity/budget.entity';
import { UserDto } from 'src/user/dto/user.dto';
import { FindManyOptions, getRepository, Repository } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) { }






  create(user: UserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }

  

  findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
  update(employeetoUpdate) {
    this.userRepository.update(employeetoUpdate.id, employeetoUpdate);
  
  }
  delete(id) {
    this.userRepository.delete(id);
  }
  find(id) {
    return this.userRepository.findOne({
      where: {
        id
      }
    });
  }


  findNew(id){
    return this.userRepository.find({ 
      where:{
        id,
        name: true,
        last_name: true,
        relations:[{
          id: true,
          count: true
        }],
      }
      

    })
      
  }







}