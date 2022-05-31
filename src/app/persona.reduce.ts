import { Personas } from './model/personas';
import { createReducer, on } from '@ngrx/store';
import { consultaExitosa, consultar } from './persona.actions';

export interface RootState {
  error: any;
  selectedMockData: { id: string; data: Personas[] };
}

const initialState: RootState = {
  error: null,
  selectedMockData: { id: '', data: [] },
};

export const personaReducer = createReducer(
  { id: 'prueba' },
  /*   on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0), */
  on(
    consultar,
    (state) => {
      //console.log(state);
      state;
      return state;
    }
    /* (state, action) => {
    console.log(action);
    console.log(state);
    
    
    return ({
      selectedMockData: action.data,
      error: null,
    })} */
  ),
  on(consultaExitosa, (state: any, actions: any) => {
    state = actions.payload.data;
    //console.log(state);

    //console.log(actions.payload);

    return state;
  })
);
