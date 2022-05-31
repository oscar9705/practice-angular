import { PersonaService } from './service/persona.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

@Injectable()
export class PersonaEffects {
  constructor(
    private actions: Actions,
    private personaService: PersonaService
  ) {}

  getPersonas$ = createEffect(() =>
    this.actions.pipe(
      ofType('[Persona Component] Consultar Personas'),
      mergeMap(() => {
        return this.personaService.getPersonas().pipe(
          map((personas) => {
            return {
              type: '[Persona Component] Consultar Personas success',
              payload: { data: personas},
            };
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
