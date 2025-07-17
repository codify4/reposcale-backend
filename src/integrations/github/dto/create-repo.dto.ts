import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRepoDto {
    @IsNumber()
    githubRepoId: number;   

    @IsString()
    installationId: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsArray()
    languages: string[];

    @IsNumber()
    stars: number;

    @IsNumber()
    forks: number;

    @IsNumber()
    watchers: number;

    @IsNumber()
    @IsOptional()
    members: number | null;
}