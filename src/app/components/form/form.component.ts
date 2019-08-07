import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  
  
  constructor() { 
    console.log("constructor");
  }

  ngOnInit() {
    console.log("OnInit");
  }

  sendForm(form) {
    console.log(form);
    console.log("formulario", form.value);
  }

  

}
