import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7038/api';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/User`);
  }
  addUser(user: User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/User`,user)
  }
}
