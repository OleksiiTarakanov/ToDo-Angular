import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoItemComponent } from './pages/todos/todo-item/todo-item.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
// import { FiterBySearchDirective } from './shared/pipes/fiter-by-search.directive';
import { FilterBySearchPipe } from './shared/pipes/fiterBySearch/filter-by-search.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { FilterBYPriorityPipe } from './shared/pipes/filterByPriority/filter-bypriority.pipe';
import { AboutProjectsComponent } from './pages/about/about-projects/about-projects.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { UserComponent } from './pages/about/user/user.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TodosComponent,
    TodoItemComponent,
    NewTodoComponent,
    HighlightDirective,
    // FiterBySearchDirective,
    FilterBySearchPipe,
    PageNotFoundComponent,
    AboutComponent,
    FilterBYPriorityPipe,
    AboutProjectsComponent,
    AboutUsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
