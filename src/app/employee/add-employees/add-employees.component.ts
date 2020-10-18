import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee.item';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  emp: Employee;

  constructor(private empService: EmployeeService, private route: Router) {
    this.emp = new Employee();
   }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    this.empService.addEmployee(this.emp).subscribe(
      res => this.route.navigateByUrl('/view-employees'),
      err => console.log(err)
    );
  }

}
