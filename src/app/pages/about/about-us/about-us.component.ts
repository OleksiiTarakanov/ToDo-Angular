import { Component, OnInit, OnDestroy } from '@angular/core';

import { User } from 'src/app/core/interfaces/users.interface';
import { UsersService } from 'src/app/core/services/users/users.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  users: Array<User>

  private unsubscribe = new Subject();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getUsers():void {
    this.usersService.getUsers()
      .subscribe(data => {
        this.users = data;
      })
  }

  getUser(userId: number): void {
    this.usersService.getUser(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.getUsers()
      });
  }


}
