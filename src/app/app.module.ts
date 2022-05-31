import { PersonaService } from './service/persona.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PersonaEffects } from './persona.effects';
import { personaReducer } from './persona.reduce';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forRoot({ persona: personaReducer }),
    EffectsModule.forRoot([PersonaEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
