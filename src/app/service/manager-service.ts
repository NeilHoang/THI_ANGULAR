import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IManager} from '../Interface/imanager';
import {IUser} from '../Interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  // tslint:disable-next-line:variable-name
  url = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IManager[]> {
    return this.httpClient.get<IManager[]>(this.url + 'list');
  }

  add(manager: IManager): Observable<IManager> {
    return this.httpClient.post<IManager>(this.url + 'store', manager);

  }

  findById(id: IManager): Observable<IManager> {
    // @ts-ignore
    return this.httpClient.get<IManager>(this.url + 'edit', id);
  }

  // @ts-ignore
  // tslint:disable-next-line:variable-name
  delete(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.delete(`${this.url}${id}` + '/delete');
  }
}
