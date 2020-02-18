import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';


const routes: Routes = [
  {path: '', redirectTo: 'accordion', pathMatch: 'full'},
  {path: 'accordion', component: AccordionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
