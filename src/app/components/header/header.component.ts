import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  
  // title = 'Angular 2Do!';
  subName = 'Educational!';
  isLogined = false;
  titleFontSize = '36px';
  constructor() { }

  ngOnInit(): void {
  }
  login(event): void {
    this.isLogined = !this.isLogined;
    console.log('LogIn', event)
  }
}
