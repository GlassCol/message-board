import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServiceUrl = 'http://localhost:8080/userApi/v1/user';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServiceUrl}`);
  }

  public getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiServiceUrl}/${userId}`);
  }

  public getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiServiceUrl}/username/${username}`);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServiceUrl}`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServiceUrl}/${user.id}`, user);
  }

  public deleteUser(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiServiceUrl}/${userId}`);
  }

  public login(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServiceUrl}/login`, user);
  }
}
