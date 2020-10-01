import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { Observable, of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  userForm = this.fb.group({
    id: [''],
    name: [''],
    age: ['']
  });

  constructor(private userService: UsersService, private fb: FormBuilder) { }

  ngOnInit(): void { }

  save(): void {
    this.userService.save(this.userForm.value);
  }

}
