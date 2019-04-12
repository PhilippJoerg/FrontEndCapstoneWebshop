import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../category';
import { GetdataService } from '../getdata.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ParamDataService } from '../param-data.service';
import { AppComponent } from '../app.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  private sub: any;
  catIndex: number;
  subIndex: number;
  itemIndex: number;
  itemName: string;
  JSONData: ICategory;
  picture: string;
  closeResult: string;
  quantity: number;
  constructor(private route: ActivatedRoute, private data: GetdataService, rating: NgbRatingConfig,
    public paramData: ParamDataService, public app: AppComponent, private modalService: NgbModal) {
    rating.max = 5;
    rating.readonly = true;
    this.itemIndex = 0;
  }

  sendData() {
    this.JSONData[this.catIndex].subcategories[this.subIndex].items[this.itemIndex].quantaty = this.getQuantaty();
    this.paramData.storeItems(this.JSONData[this.catIndex].subcategories[this.subIndex].items[this.itemIndex]);
    this.app.itemscount++;
  }
  ngOnInit() {
    this.data.getData().subscribe((value: ICategory) => {
      this.JSONData = value;
      this.getItemIndex();
      this.picture = this.JSONData[this.catIndex].subcategories[this.subIndex].items[this.itemIndex].imagelink;
    });
    this.sub = this.route.params.subscribe(params => {
      this.catIndex = +params.catID;
      this.subIndex = +params.subID;
      this.itemName = params.itemID;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getItemIndex() {
    while (this.JSONData[this.catIndex].subcategories[this.subIndex].items[this.itemIndex].name !== this.itemName) {
      this.itemIndex++;
    }
  }
  getQuantaty() {
    return this.quantity;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
