import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationGridComponent } from './grid/pagination-grid/pagination-grid.component';
import { HttpClientModule } from '@angular/common/http';
import {
  IgxAvatarModule,
  IgxBadgeModule,
  IgxButtonModule,
  IgxGridModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxProgressBarModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxSelectModule,
  IgxSimpleComboModule,
} from 'igniteui-angular';
import { GridSortingIndicatorsComponent } from './grid/grid-sorting-indicators/grid-sorting-indicators.component';
import { IgxPreventDocumentScrollModule } from './directives/prevent-scroll.directive';
import { GridAdvancedFilteringComponent } from './grid/grid-advanced-filtering/grid-advanced-filtering.component';
import { GridEditingComponent } from './grid/grid-editing/grid-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginationGridComponent,
    GridSortingIndicatorsComponent,
    GridAdvancedFilteringComponent,
    GridEditingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxPreventDocumentScrollModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxPreventDocumentScrollModule,
    IgxGridModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    IgxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
