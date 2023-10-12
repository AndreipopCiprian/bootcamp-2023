import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';

const routes: Routes = [
  {
    path: 'application-form',
    component: ApplicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
