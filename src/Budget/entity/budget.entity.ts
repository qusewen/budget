import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('budget')
export class BudgetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  count: number;
}
