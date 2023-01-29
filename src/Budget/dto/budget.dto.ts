import { IsNumber, IsString } from "class-validator";

export class BudgetDto {
  @IsNumber()
  id: number;

  @IsString()
  count: number;

}
