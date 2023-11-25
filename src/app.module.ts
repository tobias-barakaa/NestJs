import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';

@Module({
  imports: [TypeOrmModule.forRoot( {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '3817.Tob.#',
    database: 'nestjs',
    entities: [User, Profile],
    synchronize: true,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
