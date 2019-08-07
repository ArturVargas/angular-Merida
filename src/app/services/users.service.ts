import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  bolsas = 
  [
    {
      "tam":"GDE",
      "precio":"2000",
      "color":"blanco",
      "desc":"Bolsa Rosa"
    },
    {
      "tam":"GDE",
      "precio":"2000",
      "color":"blanco",
      "desc":"Bolsa Roja"
    },
    {
      "tam":"GDE",
      "precio":"2000",
      "color":"blanco",
      "desc":"Bolsa Blanca"
    },
    {
      "tam":"GDE",
      "precio":"2000",
      "color":"blanco",
      "desc":"Bolsa Morada"
    },
    {
      "tam":"GDE",
      "precio":"2000",
      "color":"blanco",
      "desc":"Bolsa Gris"
    }
  ]

  constructor() { }

  getBolsas(){
    return this.bolsas;
  }

  addBolsa(bolsa){
    this.bolsas.push(bolsa);
    console.log(this.bolsas);
    return this.bolsas;
  }

  getBolsa(idx){
    return this.bolsas[idx];
  }


}
