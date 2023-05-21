import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thought-cards/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thought-cards/list-thought/list-thought.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'thought/list',
    pathMatch: 'full'
  },
  {
    path:'thought/create',
    component: CreateThoughtComponent
  },
  {
    path: 'thought/list',
    component: ListThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
