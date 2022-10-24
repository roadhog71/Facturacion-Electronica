import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-value',
  templateUrl: './select-value.component.html',
  styleUrls: ['./select-value.component.css'],
})
export class SelectValueComponent implements OnInit {
  foods: Food[] = [
    { value: 'Cedula de Identidad', viewValue: 'CI' },
    { value: 'Pasaporte Internacional', viewValue: 'Pasaporte' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
