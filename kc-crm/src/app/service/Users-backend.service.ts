import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string
}


@Injectable({
  providedIn: 'root'
})
export class UsersBackendService {

  private readonly backendUrl = '/users'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.backendUrl);
  }


}
