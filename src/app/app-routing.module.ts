import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:'home' ,component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'portfolio',component: PortfolioComponent},
  {path:'services',component: ServicesComponent},
  {path:'contact',component: ContactComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
