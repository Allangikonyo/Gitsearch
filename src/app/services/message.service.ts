import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject=new Subject<string>();
  constructor() { }

  receiveMessage(): Observable<string>
  {
      return this.subject;
  }

  sendMessage(message:string)
  {
    this.subject.next(message);
  }


}
