import {Component, OnInit} from '@angular/core';
import {IUser} from '../../Interface/IUser';
import {UserService} from '../../service/user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  keyword;
  count;
  data: IUser[] = [];
  name;
  address;
  email;
  phone;
  userFilter: IUser[] = [];
  users: IUser[] = [];
  userService: any;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  setName(event) {
    this.name = event.target.value;
  }

  setAddress(event) {
    this.address = event.target.value;
  }

  setEmail(event) {
    this.email = event.target.value;
  }

  setPhone(event) {
    this.phone = event.target.value;
  }

  ngOnInit(): void {
    this.userFilter = this.userService.getAll();
    this.users = this.userFilter;
  }

  delete(index) {
    this.users = this.userService.delete(index, 1);
  }

  getKeyWord(event) {
    this.keyword = event.toLowerCase();
    this.userFilter = this.users.filter(user => user.name.toLowerCase().includes(this.keyword));
    this.count = this.userFilter.length;
    if (this.userFilter.length == 0) {
      this.userFilter = this.users;
    }
  }

}

