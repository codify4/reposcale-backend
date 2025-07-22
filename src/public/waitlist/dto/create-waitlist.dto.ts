import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateWaitlistDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}