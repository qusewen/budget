import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetController } from './controller/budget.controller';
import { BudgetEntity } from './entity/budget.entity';
import { BudgetService } from './service/budget.service';



@Module({
  imports: [TypeOrmModule.forFeature([BudgetEntity])],
  controllers: [BudgetController],
  providers:[BudgetService]
})
export class BudgetModule {}
