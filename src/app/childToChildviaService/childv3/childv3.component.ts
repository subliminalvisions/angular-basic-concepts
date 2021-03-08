import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-childv3',
  templateUrl: './childv3.component.html',
  styleUrls: ['./childv3.component.less']
})
export class Childv3Component implements OnInit {

  messages: any[] = [];
  subscription: Subscription;
  constructor(private messageService: MessageService) { }
  // constructor(private messageService: MessageService) {
  //     // subscribe to home component messages
  //     this.subscription = this.messageService.getMessage().subscribe(message => {
  //       if (message) {
  //         this.messages.push(message);
  //       } else {
  //         // clear messages when empty message received
  //         this.messages = [];
  //       }
  //     });
  // }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home v3 compo to v4!');
  }

  clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
  }


  ngOnInit(): void {
  }

}
