import { UserEntity } from "src/user/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'budget' })
export class BudgetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  count: number;


  @ManyToOne(type => UserEntity, users => users.id)
  users: UserEntity[]
}
