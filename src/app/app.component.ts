import { Component, OnInit } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Personas } from './model/personas';
import { consultar } from './persona.actions';

export const fromRoot = {
  consultar,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'practice';

  persona$!: Observable<Personas>;
  personas!: Personas;
  //= this.store.select((state) => state.persona);
  //= this.store.select((state) => state.persona);

  constructor(private store: Store<{ persona: Personas }>) {
    /* this.persona$ = this.store.select(
      createSelector(
        (state: any) => {
          //console.log(state);
          console.log('SELECTOR');
          console.log(state);
          console.log('SELECTOR');
          return state.persona;
        },
        (state: any) => {
          console.log('PRUEBA');

          return state;
        }
      )
    );
  } */
    this.persona$ = this.store.select((state) => state.persona);
  }
  ngOnInit(): void {
    /* this.personaService.getPersonas().subscribe((arg: Personas) => {
      this.personas = arg.personas!;
      console.log(this.personas);
    }); */
    //this.store.dispatch({ type: '[Persona Component] Consultar Personas' });
    /*  this.persona$.subscribe((data: any) => {
      console.log(data.payload);
    }); */
  }
  /* 
  increment() {
    this.store.dispatch(increment());
  }
*/
  decrement() {
    //this.store.dispatch(decrement());
    this.store.dispatch({ type: '[Persona Component] Consultar Personas' });
    /*  this.persona$.subscribe((data: any) => {
      console.log(data);
    }); */
    this.persona$.subscribe((data: Personas) => {
      console.log('PRUEBA');
      this.personas = data;
      console.log(data);
      console.log('PRUEBA');
    });
  }
  /*
  reset() {
    this.store.dispatch(reset());
  } */
}
