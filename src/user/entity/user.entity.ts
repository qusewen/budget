import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BudgetEntity } from "src/Budget/entity/budget.entity";
import { count } from "console";
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @OneToMany(type => BudgetEntity, budget => budget.id)
  @JoinTable()
  budget: BudgetEntity[]
}


