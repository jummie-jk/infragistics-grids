import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationGridComponent } from './pagination-grid/pagination-grid.component';
import { GridSortingIndicatorsComponent } from './grid/grid-sorting-indicators/grid-sorting-indicators.component';
import { GridAdvancedFilteringComponent } from './grid/grid-advanced-filtering/grid-advanced-filtering.component';


const routes: Routes = [
  { path: '', redirectTo: 'pagination-grid', pathMatch: 'full' },
  { path: 'pagination-grid', component: PaginationGridComponent },
  { path: 'sorting-grid', component: GridSortingIndicatorsComponent },
  { path: 'filtering-grid', component: GridAdvancedFilteringComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
