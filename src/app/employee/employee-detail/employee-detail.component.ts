import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  personalform!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private sv: EmployeeService,
    private route : ActivatedRoute
  ){}


  ngOnInit(): void {
    this.createForm();
    this.route.data.subscribe((res:any) => {
    this.personalform.patchValue(res.employees.employee)
    })
  }

  createForm() {
    this.personalform = this.fb.group({
      putname: [null, Validators.required],
      putemail: [null, Validators.required],
      putcalled: [null, Validators.required]
    });
  }

  addRow(){
    let dataform = this.personalform.getRawValue()
    this.sv.dataArray.push(dataform)
    
    this.router.navigate([''])
  }

  saveRow = () => {

  }

  cancel(){
    
  }

}
