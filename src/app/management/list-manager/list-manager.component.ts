import {Component, OnInit} from '@angular/core';
import {ManagerService} from '../../service/manager-service';
import {IManager} from '../../Interface/imanager';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor(private managerService: ManagerService,
              private route: Router) {
  }

  manager: IManager[];
  id;

  ngOnInit(): void {
    this.index();
  }

  // @ts-ignore
  index(): IManager[] {
    this.managerService.getAll().subscribe(next => {
      this.manager = next;
    });
  }

  // @ts-ignore
  delete(id: number): IManager {
    this.managerService.delete(id).subscribe();
    this.index();
  }
}
