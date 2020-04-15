import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';


const routes: Routes = [
  {path: '', redirectTo: 'accordion', pathMatch: 'full'},
  {path: 'accordion', component: AccordionComponent},
  {path: 'buttons', component: ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
