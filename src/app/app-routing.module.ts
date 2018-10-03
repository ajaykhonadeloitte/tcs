import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmmComponent } from './bmm/bmm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bmm', component: BmmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
