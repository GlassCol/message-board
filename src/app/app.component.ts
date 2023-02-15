import { MessageThreadService } from './service/message-thread.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageThread } from './model/message-thread';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public messageThreads: MessageThread[] = [];

  constructor(private messageThreadService: MessageThreadService) { }

  ngOnInit(): void {
    this.getMessageThreads();
  }

  public getMessageThreads(): void {
    this.messageThreadService.getMessageThreads().subscribe(
      (response: MessageThread[]) => {
        this.messageThreads = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
