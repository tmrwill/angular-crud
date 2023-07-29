import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componentwork',
  templateUrl: './componentwork.component.html',
  styleUrls: ['./componentwork.component.css']
})
export class ComponentworkComponent {
  // dataArray:any = []
  personalform!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router : Router,
  ){}


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.personalform = this.fb.group({
      putname: [null, Validators.required],
      putemail: [null, Validators.required],
      putcalled: [null, Validators.required]
    });
  }

  addRow(){
    const myDataArray = []
    let dataform = this.personalform.getRawValue()
    
    this.router.navigate([''])
  }

  // resetForm() {
  //   this.personalform.reset()
  // }
}


// if (this.personalform.valid) {
//   const { putname, putemail, putcalled } = this.personalform.value
//   this.dataArray.push({ putname, putemail, putcalled })}