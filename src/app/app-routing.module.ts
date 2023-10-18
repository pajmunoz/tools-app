import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component: InicioComponent },
  {path:'home', component: HomeComponent,
  children: [
    {
      path: 'child-a',
      component: HomeComponent,
    },
    {
      path: 'child-b',
      component: HomeComponent,
    },
  ], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
