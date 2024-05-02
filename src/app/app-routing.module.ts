import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RemoteItStaffingComponent } from './remote-it-staffing/remote-it-staffing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'remote-it-staffing', component: RemoteItStaffingComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'services', component: ServicesComponent},

];

// test

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
