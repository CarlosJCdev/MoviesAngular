import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pelicula:/id', component: HomeComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
