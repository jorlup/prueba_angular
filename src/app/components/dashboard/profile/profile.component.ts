import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { ResetUser } from 'src/app/store/actions/user.actions';
import { isUserLoading } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private store$: Store, private router: Router) { }

  globalLoading$ = this.store$.pipe(select(isUserLoading));

  ngOnInit(): void {
  }

  onSalir() {
    localStorage.removeItem('accessToken');
    this.store$.dispatch(ResetUser());
    this.router.navigateByUrl('/registro').then();
  }

}
