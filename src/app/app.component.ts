import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular crud';
  //Array of employees
  employees =[
    {'name': 'Eduardo', position: 'Manager', email:'edu@gmail.com'},
    {'name': 'Joan', position: 'Designer', email:'joan@gmail.com'},
    {'name': 'Isa', position: 'Programmer', email:'isa@gmail.com'}
  ];

  model:any = {}; // model of type "any" will be any array
  model2:any = {};
  addEmployee():void{
    this.employees.push(this.model);

  }
  deleteEmployeed():void{

  }

  myValue;//this variable will contain the index of the value to be edit
  editEmployeed(i):void{
    this.model2.name      = this.employees[i].name;
    this.model2.position  = this.employees[i].position;
    this.model2.email     = this.employees[i].email;
    this.myValue = i;
    
  }

  updateEmployeed():void{

  }
}
