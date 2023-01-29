import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/service/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  @HttpCode(200)
  async create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }


  @Get()
  @HttpCode(200)
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Post('update')
  @HttpCode(200)
  updateEmployee(@Body() employeeToUpdate: any) {
    return this.userService.update(employeeToUpdate);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteEmployee(@Param('id') id) {
    return  this.userService.delete(id);
  }
  
  @Get('find/:id')
  @HttpCode(200)
  async findNew(@Param('id') id:string) {
   return this.userService.find(
    id
   );
  }

  
  
}


