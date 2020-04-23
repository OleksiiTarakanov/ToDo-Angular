import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  userId: number;

  private unsubscribe = new Subject

  constructor(
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserId()
  }

  ngOnDestroy(){
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getUserId(): void {
    this.activetedRoute.params
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(
      params => {
        console.log(params);
        this.userId = params.userId
      }
    );
  }

}
