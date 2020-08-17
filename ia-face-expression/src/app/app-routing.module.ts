import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaceExpressionComponent } from './face-expression/face-expression.component';


const routes: Routes = [
  { path: 'face-expression', component: FaceExpressionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
