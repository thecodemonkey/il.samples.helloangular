import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age'];
  users: User[];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(
        u => {
          this.users = u;
        }
      )
    ;
  }
}
