import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  @Output() userSalary = new EventEmitter<number>();
  salaryData: number | undefined;
  constructor(private router: Router) {}

  submitSalary(data: any) {
    this.salaryData = data.salary;
    console.log(this.salaryData);
    this.router.navigate(['home']);

  }
}
