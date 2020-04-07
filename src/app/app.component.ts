import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerTitle = 'ToDo-angular';
  headerSubTitle = 'Educational project';
  footerTitle = 'Footer'
  testOutputApp(event: string): void{
    console.log(event);
  }
}
