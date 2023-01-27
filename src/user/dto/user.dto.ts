import { IsNumber, IsString } from "class-validator";
import { BudgetDto } from "src/Budget/dto/budget.dto";

export class UserDto {

  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  lastName: string;
}
