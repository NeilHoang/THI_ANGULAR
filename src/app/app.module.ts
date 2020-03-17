import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// import {JwPaginationComponent} from 'jw-angular-pagination';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './user/list/list.component';
import {AddComponent} from './user/add/add.component';
import {EditComponent} from './user/edit/edit.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {InputSearchComponent} from './main/input-search/input-search.component';
import {ListManagerComponent} from './management/list-manager/list-manager.component';
import {AddManagerComponent} from './management/add-manager/add-manager.component';
import {EditManagerComponent} from './management/edit-manager/edit-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    InputSearchComponent,
    ListManagerComponent,
    AddManagerComponent,
    EditManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
