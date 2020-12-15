import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Toyota',
      description: 'Test 1',
      price: 'P799999.00',
      image: 'https://global.toyota/pages/news/images/2020/04/23/1901/001.jpg'
    },
    {
      id: 2,
      name: 'Nissan',
      description: 'Test 2',
      price: 'P999999.00',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/2018_Nissan_Qashqai_N-Connecta_DCi_1.5_Front.jpg'
    },
    {
      id: 3,
      name: 'Honda',
      description: 'Test 3',
      price: 'P1099999.00',
      image: 'https://i.ytimg.com/vi/LRcQdorxJTw/maxresdefault.jpg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
