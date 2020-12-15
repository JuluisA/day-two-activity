import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Angular Training';
  appSubtitle = ' Subtitle from Service';
  appColor = 'dark';

  subjectName = new Subject();
  bgColor = new Subject();
  constructor() { }

  toUpperCase(text: any): any {
    return text.toUpperCase();
  }
}
