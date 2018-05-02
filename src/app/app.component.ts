import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Angular crud';

  msg:string = '';
  //Array of employees
  employees =[
    {'name': 'Eduardo', position: 'Manager', email:'edu@gmail.com'},
    {'name': 'Joan', position: 'Designer', email:'joan@gmail.com'},
    {'name': 'Isa', position: 'Programmer', email:'isa@gmail.com'}
  ];

  model:any = {}; // model of type "any" will be any array
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.model = {};
    this.msg = "saved data";

  }
  deleteEmployee(i):void{
    var answer = confirm('are you sure deletes?');
    if(answer){
      this.employees.splice(i, 1);
      this.msg = "Deleted data";
    }

  }

  myValue;//this variable will contain the index of the value to be edit
  editEmployee(i):void{
    this.hideUpdate = false;
    this.model2.name      = this.employees[i].name;
    this.model2.position  = this.employees[i].position;
    this.model2.email     = this.employees[i].email;
    this.myValue = i;
    
  }

  updateEmployee():void{
    let i = this.myValue;
    for(let j=0; j< this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.msg = "Updated Data";
        this.hideUpdate=true;
        this.model2 = {};
      }
    }

  }

  closeAlert():void{
   this.msg= ''; 
  }
}
