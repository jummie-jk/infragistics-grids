import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationGridComponent } from './pagination-grid/pagination-grid.component';
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
} from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";

@NgModule({
  declarations: [AppComponent, NavbarComponent, PaginationGridComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
