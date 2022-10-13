import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDownloaderComponent } from './invoice-downloader.component';

describe('InvoiceDownloaderComponent', () => {
  let component: InvoiceDownloaderComponent;
  let fixture: ComponentFixture<InvoiceDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDownloaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
