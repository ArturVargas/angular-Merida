import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styles: []
})
export class DataFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('algo@mail.com', [Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required]),
      sexo: new FormControl(''),
      desc: new FormControl('')
    })
  }

  ngOnInit() {
  }

  sendForm() {
    console.log(this.loginForm);
    this.router.navigate(['/services'])
  }

}
