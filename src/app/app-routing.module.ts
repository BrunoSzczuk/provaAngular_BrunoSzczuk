import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacinaComponent } from './vacina/vacina.component';

const routes: Routes = [
  { path: '', component: VacinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
