import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    AuthModule, 
    UsersModule,
    MongooseModule.forRoot(process.env.DATABASE_ENDPOINT) 
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    AuthService
  ],
})
export class AppModule {
  
}
