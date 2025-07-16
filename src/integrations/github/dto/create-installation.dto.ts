import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { JsonValue } from "generated/prisma/runtime/library";

export class CreateInstallationDto {
    @IsString()
    @IsNotEmpty()
    installationId: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsObject()
    @IsNotEmpty()
    permissions: JsonValue;

    @IsString()
    @IsNotEmpty()
    repositorySelection: string;
}
