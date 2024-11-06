import { IsArray, IsNotEmpty } from "class-validator";
import { Users } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class LSC {
    @IsNotEmpty()
    input_string: string

    @IsNotEmpty()
    longest_unique_substring: string

    @IsNotEmpty()
    longest_substring_length: number

    @IsArray()
    unique_substrings: string[]

    @IsNotEmpty()
    calculated_at: Date

    @IsNotEmpty()
    userId: string

}