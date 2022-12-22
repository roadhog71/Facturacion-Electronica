import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    PanelModule

  ],
  exports: [
    CardModule,
    PanelModule
  ],
})
export class PrimengModule {

}
