import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  {path: '', component: MainScreenComponent},
  {path: 'coffee', component: CoffeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
