import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogGinComponent } from './log-gin.component';

describe('LogGinComponent', () => {
  let component: LogGinComponent;
  let fixture: ComponentFixture<LogGinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogGinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogGinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
