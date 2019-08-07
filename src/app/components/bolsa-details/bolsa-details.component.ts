import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-bolsa-details',
  templateUrl: './bolsa-details.component.html',
  styles: []
})
export class BolsaDetailsComponent implements OnInit {
  data;
  bolsa;

  constructor(private actvRoute: ActivatedRoute,
              private bolsaSvc: UsersService
    ) { 
    this.actvRoute.params.subscribe( data => {
      this.data = data.id;
    })
    console.log(this.data);
  }

  ngOnInit() {
    this.getBolsaDetails();
  }

  getBolsaDetails(){
    this.bolsa = this.bolsaSvc.getBolsa(this.data)
    console.log(this.bolsa);
  }

}
