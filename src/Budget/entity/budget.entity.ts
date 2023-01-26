import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('budget')
export class BudgetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  count: number;

}
