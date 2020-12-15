import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  titleShop: any;
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.titleShop = this._globalService.appTitle;
  }

}
