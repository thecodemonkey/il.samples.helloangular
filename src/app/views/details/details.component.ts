import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { Observable, of } from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  userForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    age: ['', Validators.required]
  });
  isNew = true;
  title = 'create new user';

  constructor(private userService: UsersService,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userID = this.route.snapshot.paramMap.get('id');

    if (userID) {
      this.isNew = false;
      this.title = 'edit user';

      this.userService.getUser(Number(userID))
        .subscribe(u => {
          this.userForm.patchValue(u);
        });
    }
  }

  save(): void {
    this.userService.save(this.userForm.value);
  }

}
