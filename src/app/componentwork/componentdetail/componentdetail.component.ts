import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-componentdetail',
  templateUrl: './componentdetail.component.html',
  styleUrls: ['./componentdetail.component.css']
})
export class ComponentdetailComponent {
  dataArray:any = []
  // personalform!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    
  ){}

ngOnInit(): void {
  // this.createForm();
}

// createForm() {
//   this.personalform = this.fb.group({
//     putname: [null, Validators.required],
//     putemail: [null, Validators.required],
//     putcalled: [null, Validators.required]
//   });
// }


  editRow(index: number) {
    const newName = prompt('Enter new name:', this.dataArray[index].putname)

    if (newName !== null){
      this.dataArray[index].putname = newName
    }
  }

  deleteRow(index: number) {
    this.dataArray.splice(index, 1);
  }
  
}

