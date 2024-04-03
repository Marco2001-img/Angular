import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/components/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroesModules } from './heroes/heroes.modules';
import { CounterModule } from './counter/counter.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
   CounterModule,
   BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
