import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateWaitlistDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}