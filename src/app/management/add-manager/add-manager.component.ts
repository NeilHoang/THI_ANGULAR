import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ManagerService} from '../../service/manager-service';
import {IManager} from '../../Interface/imanager';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  createManagerForm;

  constructor(private fb: FormBuilder,
              private managerService: ManagerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createManagerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }
  onSubmit(data: IManager) {
    this.managerService.add(data).subscribe(next => {
    });
    this.router.navigate(['/list']);
  }

  get firstName() {
    return this.createManagerForm.get('firstName');
  }

  get lastName() {
    return this.createManagerForm.get('lastName');
  }

  get phone() {
    return this.createManagerForm.get('phone');
  }

  get email() {
    return this.createManagerForm.get('email');
  }

  get address() {
    return this.createManagerForm.get('address');
  }

  get avatar() {
    return this.createManagerForm.get('avatar');
  }

}
