import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  public name="To Student Managment System";
  information:string ='information';
  studentName:string ='';

  onStudentNameChange(event:Event):void{
    this.studentName = (event.target as HTMLInputElement).value;
  }

}
