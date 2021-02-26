import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { HomeComponent } from './home.component'
import { TableComponent } from './table/table.component'
@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
