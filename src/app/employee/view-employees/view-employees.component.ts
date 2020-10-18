import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.item';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  empList: Employee[] = [];

  constructor(private empService: EmployeeService) { 
    this.getEmployees();
  }

  ngOnInit(): void {
  }

  getEmployees(){
    this.empService.getHeaders();
    this.empService.getEmployees().subscribe(
      res => this.empList=res,
      err => console.log(err)
    );
  }

}
