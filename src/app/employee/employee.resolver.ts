import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class employeeResolver implements Resolve<any> {
  constructor(private sv : EmployeeService , private router : Router){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      const params = this.router.getCurrentNavigation()?.extras.state as any
      return params
    }
}