import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {from, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of<User[]>([
      {id: 1, name: 'Hydrogen', age: 10 },
      {id: 2, name: 'Helium', age: 12 },
      {id: 3, name: 'Lithium', age: 14 },
      {id: 4, name: 'Beryllium', age: 16 }
      ]
    );
  }

  save( user: User ): void {
    console.log(user);
  }
}
