import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Registro, User} from "../models/user.interface";

interface Resp {
  id: number;
  status: string;
}

export interface Tokens {
  accessToken: string;
  user: User;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  getProfile(): Observable<User> {
    return this.http.get<User>('/profile');
  }

  signUp(signUpParams: Registro): Observable<Tokens> {
    return this.http.post<Tokens>('/users', signUpParams);
  }
}