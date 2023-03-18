import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'User 1',
      password: '1',
    },
    {
      userId: 2,
      username: 'User 2',
      password: '2',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}