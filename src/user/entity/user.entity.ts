import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BudgetEntity } from "src/Budget/entity/budget.entity";
@Entity({name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;


  @ManyToOne(()=> BudgetEntity, (budget: BudgetEntity) => budget.counts)
  @JoinColumn({name:'user_budget'})
  budget: BudgetEntity
}


