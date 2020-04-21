import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonComponent } from './buttons/button/button.component';


const routes: Routes = [
  {path: '', redirectTo: 'accordion', pathMatch: 'full'},
  {path: 'accordion', component: AccordionComponent},
  {path: 'buttons', component: ButtonsComponent, children: [
    {path: '', redirectTo: 'button', pathMatch: 'full'},
    {path: 'button', component: ButtonComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
