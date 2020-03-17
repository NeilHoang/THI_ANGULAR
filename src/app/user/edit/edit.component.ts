import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  UserUpdateForm;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }
   id = this.route.snapshot.paramMap.get('id');


  ngOnInit(): void {
    const user = this.userService.findByIndex(this.id);
    this.UserUpdateForm = this.formBuilder.group({
      name: [user.name, [Validators.required, Validators.minLength(5)]],
      email: [user.email, [Validators.required, Validators.email]],
      phone: [user.phone, [Validators.required]],
      address: [user.address, [Validators.required]],
    });
  }

  onSubmit(data) {
    this.userService.update(this.id, data);
    this.router.navigate(['/user']);

  }

  get name() {
    return this.UserUpdateForm.get('name');
  }

  get email() {
    return this.UserUpdateForm.get('email');
  }

  get phone() {
    return this.UserUpdateForm.get('phone');
  }

  get address() {
    return this.UserUpdateForm.get('address');
  }
}
