import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  dataArray:any[] = []

  constructor(
    private sv: EmployeeService
  ){}

  ngOnInit(): void {
    this.dataArray = this.sv.dataArray
  }

  deleteRow(index: number) {
    this.dataArray.splice(index, 1);
  }
}