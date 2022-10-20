import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InvoiceDownloaderComponent } from './invoice-downloader/invoice-downloader.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'home/invoice-downloader',
    component: InvoiceDownloaderComponent,
  },
  {
    path: 'home/sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
