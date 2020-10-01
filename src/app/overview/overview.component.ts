import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  name: string;
  age: number;
}

const users: Array<User> = [
  {id: 1, name: 'Hydrogen', age: 10 },
  {id: 2, name: 'Helium', age: 12 },
  {id: 3, name: 'Lithium', age: 14 },
  {id: 4, name: 'Beryllium', age: 16 }
];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  data: Array<User> = users;

  constructor() {
  }

  ngOnInit(): void {
  }

}
