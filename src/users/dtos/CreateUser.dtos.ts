export class CreateUserDto {
    username: String;
    password: String;
    createdAt: Date;
    authStrategy: String;
}