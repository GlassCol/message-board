import { Injectable } from '@angular/core';
import { MessageThread } from '../model/message-thread';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageThreadService {
  private apiServiceUrl = 'http://localhost:8080/messageThreadApi/v1/messageThread';

  constructor(private http: HttpClient) { }

  public getMessageThreads(): Observable<MessageThread[]> {
    return this.http.get<MessageThread[]>(`${this.apiServiceUrl}`);
  }

  public getMessageThread(messageThreadId: number): Observable<MessageThread> {
    return this.http.get<MessageThread>(`${this.apiServiceUrl}/${messageThreadId}`);
  }

  public getMessageThreadsByUserId(userId: number): Observable<MessageThread[]> {
    return this.http.get<MessageThread[]>(`${this.apiServiceUrl}/user/${userId}`);
  }

  public getMessageThreadsByTitle(title: string): Observable<MessageThread[]> {
    return this.http.get<MessageThread[]>(`${this.apiServiceUrl}/title/${title}`);
  }

  public addMessageThread(messageThread: MessageThread): Observable<MessageThread> {
    return this.http.post<MessageThread>(`${this.apiServiceUrl}`, messageThread);
  }

  public updateMessageThread(messageThread: MessageThread): Observable<MessageThread> {
    return this.http.put<MessageThread>(`${this.apiServiceUrl}/${messageThread.id}`, messageThread);
  }

  public deleteMessageThread(messageThreadId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiServiceUrl}/${messageThreadId}`);
  }
}
