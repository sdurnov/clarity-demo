import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionDefaultComponent } from './accordion/accordion-default/accordion-default.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonComponent } from './buttons/button/button.component';
import { ButtonGroupComponent } from './buttons/button-group/button-group.component';
import { DropdownComponent } from './buttons/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionDefaultComponent,
    ButtonsComponent,
    ButtonComponent,
    ButtonGroupComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
