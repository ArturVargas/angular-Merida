import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  bolsas;
  constructor(private bolsaSvc: UsersService,
              private router: Router
    ) { }

  ngOnInit() {
    this.getBolsas();
  }

  getBolsas(){
    this.bolsas = this.bolsaSvc.getBolsas();
  }

  addBolsa(){
    let data= {
      "tam":"MED",
      "precio":"2500",
      "color":"rojo"
    }
    this.bolsaSvc.addBolsa(data);
  }

  getDetails(idx){
    console.log(idx);
    this.router.navigate(['/bolsa', idx])
  }

}
