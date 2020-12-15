import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  background = 'dark';
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.bgColor.subscribe(
      (color: any) => {
        setTimeout(() => {
          this.background = color;
        },10);
      }
    );
  }
}
