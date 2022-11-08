import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicForm';
userdata:any='';
  getData(data:NgForm){
    console.log(data);
    this.userdata=data;
  }
}
