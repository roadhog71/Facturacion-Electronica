import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InvoiceDownloaderComponent } from './invoice-downloader/invoice-downloader.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { FacturaCardComponent } from './factura-card/factura-card.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/sign-up/login', component: LoginComponent },
  { path: 'home/invoice-downloader', component: InvoiceDownloaderComponent },
  { path: 'factura/:cdc', component: FacturaCardComponent},

  { path: 'home/sign-up', component: SignUpComponent },
  { path: 'home/login/sign-up', component: SignUpComponent },
  { path: 'home/invoice-table', component: InvoiceTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
