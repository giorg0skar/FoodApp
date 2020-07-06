import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { FoodlistComponent } from './foodlist/foodlist.component';


const routes: Routes = [
  { path: 'providers', component: ProviderComponent },
  { path: 'customer', component: FoodlistComponent},
  { path: '', redirectTo: '/customer', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
