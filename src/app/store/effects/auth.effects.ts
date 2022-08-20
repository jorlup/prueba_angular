import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as userActions from '../actions/user.actions';
import { Store } from '@ngrx/store';
//import {AppState} from "@capacitor/core";

@Injectable()
export class AuthEffects {
  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.GetProfile),
      mergeMap(() =>
        this.authService.getProfile().pipe(
          map((user) => userActions.SetUser({ user })),
          catchError((error) => throwError(() => new Error(error)))
        )
      )
    )
  );

  signUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authActions.SignUp),
        tap(() => this.store$.dispatch(userActions.LoadingUser())),
        switchMap((action) =>
          this.authService.signUp(action.params).pipe(
            tap((tokens) => {
              localStorage.setItem('accessToken', tokens.accessToken);
              this.router.navigateByUrl('/profile').then();
            }),
            //tap(() => this.store$.dispatch(userActions.GetProfile())),
            map(() => userActions.GetProfile()),
            catchError((error) => throwError(() => new Error(error)))
          )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store$: Store
  ) {}
}
