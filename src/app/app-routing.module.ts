import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchParkingComponent } from './components/search-parking/search-parking.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchParkingComponent
  },
  {
    path: "navigation",
    component: NavigationComponent
  },
  {
    path: "confirmation",
    component: ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
