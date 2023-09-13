import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  students: any[] = [
    { name: 'Name 1', email: 'Email@gmail.com', marks: 55 },
    { name: 'Name 2', email: 'Email2@gmail.com', marks: 30 },
    
  ];
}
