import { createAction, props } from '@ngrx/store';

export const consultar = createAction('[Persona Component] Consultar Personas');
export const consultaExitosa = createAction(
  '[Persona Component] Consultar Personas success', props<{ data: any }>()
);
