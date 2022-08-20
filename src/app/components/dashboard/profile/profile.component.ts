import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { isUserLoading } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private store$: Store) { }

  globalLoading$ = this.store$.pipe(select(isUserLoading));

  ngOnInit(): void {
  }

  onSalir() {
    console.log('onSalir');
  }

}
