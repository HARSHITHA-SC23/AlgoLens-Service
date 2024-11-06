import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, {message: 'Invalid Email Format'})
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 20)
    password: string;

    @IsNotEmpty()
    created_at: Date;

    @IsNotEmpty()
    updated_at: Date;

    @IsNotEmpty()
    userId: string;
}