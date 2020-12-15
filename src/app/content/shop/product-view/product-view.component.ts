import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  selectedProduct: any;

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
  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) {
    console.log(this.router.snapshot.params.id);

  }

  ngOnInit(): void {
    this.router.params.subscribe( // get the object
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if (selected.length > 0) {
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name); // push
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }

}
