import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users: any[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user1@ex.com',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@ex.com',
    },
  ];
  async getUsers() {
    return this.users;
  }
}
