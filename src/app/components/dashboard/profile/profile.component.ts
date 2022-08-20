import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { GetProfile, ResetUser } from 'src/app/store/actions/user.actions';
import { isUserLoading, userData } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private store$: Store, private router: Router) { }

  globalLoading$ = this.store$.pipe(select(isUserLoading));
  userData$ = this.store$.select(userData);

  ngOnInit(): void {
    this.store$.dispatch(GetProfile());
  }
  onSalir() {
    localStorage.removeItem('accessToken');
    this.store$.dispatch(ResetUser());
    this.router.navigateByUrl('/registro').then();
  }
}
