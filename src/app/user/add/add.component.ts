import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IUser} from '../../Interface/IUser';
import {UserService} from '../../service/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  createUserForm;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onSubmit(data) {
    let user: IUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address
    };
    this.userService.add(user);
    // @ts-ignore
    this.route.navigate(['/user']);
  }

  get name() {
    return this.createUserForm.get('name');
  }

  get email() {
    return this.createUserForm.get('email');
  }

  get phone() {
    return this.createUserForm.get('phone');
  }

  get address() {
    return this.createUserForm.get('address');
  }
}
