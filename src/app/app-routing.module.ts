import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './pages/todos/todos.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';





const routes: Routes = [
  { path: '', redirectTo: 'toDoList', pathMatch: 'full' },
  { path: 'toDoList', component: TodosComponent, },
  { 
    path: 'about', component: AboutComponent, 
    children: [
      
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