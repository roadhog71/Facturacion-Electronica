import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-downloader',
  templateUrl: './invoice-downloader.component.html',
  styleUrls: ['./invoice-downloader.component.css'],
})
export class InvoiceDownloaderComponent implements OnInit {
  selected = '';
  hide: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}
