import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from '../data/athletesData';

@Component({
  selector: 'app-pagination-grid',
  templateUrl: './pagination-grid.component.html',
  styleUrls: ['./pagination-grid.component.css']
})
export class PaginationGridComponent {
  @ViewChild('grid1', { static: true }) public grid1!: IgxGridComponent;
  public data!: any[];

  public ngOnInit(): void {
      this.data = athletesData;
  }
}
