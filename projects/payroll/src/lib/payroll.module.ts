import { NgModule } from '@angular/core';
import { PayrollComponent } from './payroll.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { SecondaryActionPanelComponent } from './components/secondary-action-panel/secondary-action-panel.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PayrollComponent,
    DataTableComponent,
    EmployeeInfoComponent,
    NavigationPanelComponent,
    SecondaryActionPanelComponent,
  ],
  imports: [
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [PayrollComponent],
})
export class PayrollModule {}
