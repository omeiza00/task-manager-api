import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export enum Status{
    pending = 'pending',
    progress = 'in-progress',
    completeed = 'completed'
}

export enum Priority{
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    title:string

    @IsNotEmpty()
    @IsString()
    description:string

    @IsNotEmpty()
    @IsEnum(Priority)
    priority:Priority

    @IsNotEmpty()
    @IsEnum(Status)
    status:Status
}
