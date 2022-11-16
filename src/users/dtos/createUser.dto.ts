import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    id: number;

    @IsNotEmpty()
    // @IsNumber()
    age: number;
}