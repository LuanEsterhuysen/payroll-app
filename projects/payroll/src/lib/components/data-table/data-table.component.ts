import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../../services/employee.service';

interface Job {
  jobName: string;
  jobDescription: string;
  type: string;
  quantity: number;
  rate: number;
}

interface Employee {
  id: number;
  number: string;
  team: string;
  employeeName: string;
  jobs: Job[];
}

interface EmployeeWithJob {
  jobName: string;
  jobDescription: string;
  type: string;
  quantity: number;
  rate: number;
}

@Component({
  selector: 'lib-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = [
    'jobName',
    'jobDescription',
    'type',
    'quantity',
    'rate',
    'actions',
  ];
  dataSource = new MatTableDataSource<EmployeeWithJob>();
  selectedAction = 'Primary Action'; // set default

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      const employeesWithJobs: EmployeeWithJob[] = [];
      data.forEach((employee) => {
        employee.jobs.forEach((job) => {
          employeesWithJobs.push({
            jobName: job.jobName,
            jobDescription: job.jobDescription,
            type: job.type,
            quantity: job.quantity,
            rate: job.rate,
          });
        });
      });
      this.dataSource.data = employeesWithJobs;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Apply filter to the data source
  }

  selectAction(action: string) {
    this.selectedAction = action; // Set the selected action utton
  }

  logAction(element: EmployeeWithJob) {
    console.log(`${this.selectedAction} clicked for:`, element);
  }
}
