import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { BudgetDto } from '../dto/budget.dto';
import { BudgetService } from '../service/budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService) { }

  @Post()
  @HttpCode(200)
  create(@Body() budget: BudgetDto): Promise<BudgetDto> {
    return this.budgetService.create(budget);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<BudgetDto[]> {
    return this.budgetService.findAll();
  }

  @Post('update')
  @HttpCode(200)
  updateEmployee(@Body() budgetToUpdate: any) {
    this.budgetService.update(budgetToUpdate);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteEmployee(@Param('id') id) {
    this.budgetService.delete(id);
  }
  
  @Get('find/:id')
  @HttpCode(200)
  async findOne(@Param('id') id:string) {
  return  this.budgetService.find(id);
  }
}

