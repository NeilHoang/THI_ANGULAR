import {Injectable} from '@angular/core';
import {IUser} from '../Interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [{
    id: 1,
    name: 'Hoang',
    address: 'QT',
    email: 'hoang@gmail.com',
    phone: 862096685
  },
    {
      id: 2,
      name: 'Nguyet',
      address: 'DN',
      email: 'nguyet@gmail.com',
      phone: 935717508
    }];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  add(user: IUser) {
    this.users.push(user);
  }

  findByIndex(index): IUser {
    return this.users[index];
  }
  update(index, data) {
    this.users[index] = data;
  }

  delete(index) {
    this.users.splice(index, 1);
  }
}

