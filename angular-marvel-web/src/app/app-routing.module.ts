import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Antagonist1Component } from './Antagonist1/antagonist1.component';
import { Antagonist2Component } from './Antagonist2/antagonist2.component';
import { BlogComponent } from './Blog/blog.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Antagonist1', component: Antagonist1Component, pathMatch: 'full' },
  { path: 'Antagonist2', component: Antagonist2Component },
  { path: 'Blog', component: BlogComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
