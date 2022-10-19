import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'back-button',
  template: `<button mat-button (click)="goBack()" [color]="">
    <mat-icon
      class="back-icon"
      aria-hidden="false"
      fontIcon="arrow_back"
    ></mat-icon>
  </button>`,
})
export class BackButtonComponent {
  @Input()
  color!: string;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
