import {BudgetEntity} from '../entity/budget.entity'
import { BudgetDto } from '../dto/budget.dto'
import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetService{
    constructor(
        @InjectRepository(BudgetEntity)
        private budgetRepository: Repository<BudgetEntity>
    ){}

    create(budget: BudgetDto): Promise<BudgetDto>{
        return this.budgetRepository.save(budget)
    }
    findAll(): Promise<BudgetDto[]> {
        return this.budgetRepository.find();
      }
      update(budgetUpdate){
        this.budgetRepository.update(budgetUpdate.id,budgetUpdate);
    }
    delete(id){
        this.budgetRepository.delete(id);
      }
      find(id){
        this.budgetRepository.find(id);
      }
}