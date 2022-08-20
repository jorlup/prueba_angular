import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as userActions from '../actions/user.actions';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class UserEffects {
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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
