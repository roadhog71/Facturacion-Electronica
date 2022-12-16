import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCardComponent } from './factura-card.component';

describe('FacturaCardComponent', () => {
  let component: FacturaCardComponent;
  let fixture: ComponentFixture<FacturaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
