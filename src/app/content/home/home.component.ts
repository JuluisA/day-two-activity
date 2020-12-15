import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleShop: any;
  bgColor = '';
  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._globalService.bgColor.next(this.bgColor);
  }

  ngOnDestroy():void{
    this._globalService.bgColor.next('dark');
  }


}
