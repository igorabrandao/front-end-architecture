import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../../core/services/alert.service';
import { AuthenticationService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-social-reg',
  templateUrl: './social-reg.component.html',
  styleUrls: ['./social-reg.component.scss']
})
export class SocialRegComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  /**
   * Register method
   */
  register() {
    // Set the form status
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('login!');

    this.loading = true;

    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
