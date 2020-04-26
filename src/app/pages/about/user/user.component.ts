import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { User } from 'src/app/core/interfaces/users.interface';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number;
  user: User;

  private unsubscribe = new Subject

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUserId();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getUserId(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => {
          this.getUser(params.userId)
        });
  }

  private getUser(userId: number): void {
    this.usersService.getUser(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        console.log(data.picture);
        this.user = data;
      })
  }

}
