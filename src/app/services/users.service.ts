import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {from, Observable, of} from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const DUMMY_USERS: User[] = [
  {id: 1, name: 'Hydrogen', age: 10 },
  {id: 2, name: 'Helium', age: 12 },
  {id: 3, name: 'Lithium', age: 14 },
  {id: 4, name: 'Beryllium', age: 16 }
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    // return this.httpClient.get<User[]>(this.getApiURL('/users'));
    return of<User[]>(DUMMY_USERS);
  }

  save( user: User ): void {
    // this.httpClient.post<User>(this.getApiURL('/users'), user);

    console.log(user);
  }

  getUser(id: number): Observable<User> {
    const user = DUMMY_USERS.find(u => u.id === id);
    return of(user);
  }

  getApiURL(path: string): string {
    return environment.restApiUrl + '' + path;
  }
}
