import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { contains } from '@igniteui/material-icons-extended';
import { DATA } from '../../data/nwindData';

@Component({
  selector: 'app-grid-editing',
  templateUrl: './grid-editing.component.html',
  styleUrls: ['./grid-editing.component.css'],
})
export class GridEditingComponent {
  @ViewChild('logger')
  public logger!: ElementRef;

  public $rowEditEnter = false;
  public $cellEditEnter = false;
  public $cellEdit = false;
  public $rowEdit = false;
  public data;

  public constructor(private renderer: Renderer2) {
    this.data = DATA;
  }
  public rowEditEnter(evt: { cancel: boolean | undefined; rowID: string; }) {
    evt.cancel = this.$rowEditEnter;
    this.logAnEvent(`=> 'rowEditEnter' with 'RowID':` + evt.rowID, evt.cancel);
  }
  public cellEditEnter(evt: { cancel: boolean | undefined; oldValue: string; }) {
    evt.cancel = this.$cellEditEnter;
    this.logAnEvent(
      `=> 'cellEditEnter' with 'value':` + evt.oldValue,
      evt.cancel
    );
  }
  public cellEdit(evt: any) {
    evt.cancel = this.$cellEdit;
    this.logAnEvent(
      `=> 'cellEdit' with 'newValue':` + evt.newValue,
      evt.cancel
    );
  }
  public cellEditDone() {
    this.logAnEvent(`=> 'cellEditDone'`);
  }

  public cellEditExit() {
    this.logAnEvent(`=> 'cellEditExit'`);
  }
  public rowEdit(evt: { cancel: boolean | undefined; }) {
    evt.cancel = this.$rowEdit;
    this.logAnEvent(`=> 'rowEdit'`, evt.cancel);
  }
  public rowEditDone() {
    this.logAnEvent(`=> 'rowEditDone'`);
  }
  public rowEditExit() {
    this.logAnEvent(`=> 'rowEditExit'  << End of cycle >>`);
  }

  private logAnEvent(msg: string, canceled?: boolean) {
    const createElem = this.renderer.createElement('p');

    if (canceled) {
      msg = msg.concat(': has been canceled ');
    }

    const text = this.renderer.createText(msg);
    this.renderer.appendChild(createElem, text);
    const container = this.logger.nativeElement;
    this.renderer.insertBefore(container, createElem, container.children[0]);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public clearLog() {
    const elements = this.logger.nativeElement.querySelectorAll('p');
    for (let index = 0; index < elements.length; index++) {
      this.renderer.removeChild(this.logger.nativeElement, elements[index]);
    }
  }
}
