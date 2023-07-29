import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentdetailComponent } from './componentwork/componentdetail/componentdetail.component';
import { ComponentworkComponent } from './componentwork/componentwork.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { employeeResolver } from './employee/employee.resolver';

const routes: Routes = [{
  path: '',
  component: EmployeeComponent
},{
  path: 'employeeDetail',
  component: EmployeeDetailComponent,
  resolve: {employees: employeeResolver}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
