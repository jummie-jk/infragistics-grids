import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationGridComponent } from './pagination-grid/pagination-grid.component';

const routes: Routes = [
  { path: '', redirectTo: 'pagination-grid', pathMatch: 'full' },
  { path: 'pagination-grid', component: PaginationGridComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
