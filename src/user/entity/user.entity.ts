import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BudgetEntity } from "src/Budget/entity/budget.entity";
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @OneToMany(() => BudgetEntity, budget => budget.id)
  budget: BudgetEntity[]
  
}
