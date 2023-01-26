import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('budget')
export class BudgetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  count: number;


}
