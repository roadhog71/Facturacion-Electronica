// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InvoiceDownloaderComponent } from './invoice-downloader/invoice-downloader.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectValueComponent } from './select-value/select-value.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { TableComponent } from './table/table.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FacturaCardComponent } from './factura-card/factura-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    InvoiceDownloaderComponent,
    BackButtonComponent,
    SignUpComponent,
    SelectValueComponent,
    InvoiceTableComponent,
    DateRangePickerComponent,
    TableComponent,
    HomeNavbarComponent,
    FacturaCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
