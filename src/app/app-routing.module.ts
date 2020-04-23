import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './pages/todos/todos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutProjectsComponent } from './pages/about/about-projects/about-projects.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { UserComponent } from './pages/about/user/user.component';





const routes: Routes = [
  { path: '', redirectTo: 'toDoList', pathMatch: 'full' },
  { path: 'toDoList', component: TodosComponent, },
  { 
    path: 'about', component: AboutComponent, 
    children: [
      { path: '', redirectTo: 'about-project', pathMatch: 'full', },
      { path: 'about-projects', component: AboutProjectsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'about-us/:userId', component: UserComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}