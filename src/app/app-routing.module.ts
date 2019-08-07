import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BolsaDetailsComponent } from './components/bolsa-details/bolsa-details.component';

const routes: Routes = [
  { path:'services', component: CardsComponent},
  { path:'forms', component: FormComponent},
  { path:'home', component: HomeComponent},
  { path:'bolsa/:id', component: BolsaDetailsComponent},
  { path:'', pathMatch:'full',redirectTo:'/home'},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
