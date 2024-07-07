import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'lib-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss'],
})
export class PayrollComponent implements OnInit {
  displayEmployeeInfo: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onDisplayEmployeeInfoChange(event: boolean) {
    console.log('onDisplayEmployeeInfoChange:', event);
    this.displayEmployeeInfo = event;
  }
}
