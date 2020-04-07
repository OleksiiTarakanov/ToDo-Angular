import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() title: string;
  @Input() subTitle: string;
  
  @Output() testOutput = new EventEmitter<string>();

  // title = 'Angular 2Do!';
  subName = 'Educational project!';
  isLogined = false;
  titleFontSize = '36px';
  dataList = ['Angular','Ts','Scss'];
  constructor() { }

  ngOnInit(): void {

  }
  ngOnDestroy(): void{

  }
  ngOnChanges(): void{

  }
  logIn(): void {
    console.log('LogIn'); 
    this.testOutput.emit('header login works')
  }
  
}
