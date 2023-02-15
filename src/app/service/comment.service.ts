import { Injectable } from '@angular/core';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
private apiServiceUrl = 'http://localhost:8080/commentApi/v1/comment';
  constructor(private http: HttpClient) { }

  public getCommentById(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiServiceUrl}/${commentId}`);
  }

  public getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiServiceUrl}/post/${postId}`);
  }

  public getCommentsByUserId(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiServiceUrl}/user/${userId}`);
  }

  public createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiServiceUrl}`, comment);
  }

  public updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.apiServiceUrl}/${comment.id}`, comment);
  }

  public deleteComment(commentId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiServiceUrl}/${commentId}`);
  }
}
