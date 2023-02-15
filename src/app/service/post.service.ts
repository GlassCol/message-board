import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiServiceUrl = 'http://localhost:8080/postApi/v1/post';

  constructor(private http: HttpClient) { }

  public getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiServiceUrl}/${postId}`);
  }

  public getPostsByThreadId(threadId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiServiceUrl}/thread/${threadId}`);
  }

  public getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiServiceUrl}/user/${userId}`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiServiceUrl}`, post);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiServiceUrl}/${post.id}`, post);
  }

  public deletePost(postId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiServiceUrl}/${postId}`);
  }
}
