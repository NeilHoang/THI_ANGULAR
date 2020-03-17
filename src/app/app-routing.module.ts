import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './user/add/add.component';
import {ListComponent} from './user/list/list.component';
import {EditComponent} from './user/edit/edit.component';
import {AddManagerComponent} from './management/add-manager/add-manager.component';
import {ListManagerComponent} from './management/list-manager/list-manager.component';
import {EditManagerComponent} from './management/edit-manager/edit-manager.component';


const routes: Routes = [
  {
    path: 'user/create', component: AddComponent
  },
  {
    path: 'user', component: ListComponent
  },
  {
    path: 'user/:id/edit', component: EditComponent
  },
  {
    path: 'list/store', component: AddManagerComponent
  },
  {
    path: 'list', component: ListManagerComponent
  },
  {
    path: 'list/:id/edit', component: EditManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
