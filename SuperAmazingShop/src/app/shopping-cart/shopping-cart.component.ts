import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { IItems } from '../items';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  Items: IItems[] = [];
  total: number;
  totaltoal: number;
  shipping: number;
  tax: number;
  constructor(public paramData: ParamDataService, public app: AppComponent, public common: CommonModule) {
  }

  ngOnInit() {
    this.Items = this.paramData.getItems();
    this.chainItems();
    this.calculate();
  }
  calculate() {
    if (this.total < 20) {
      this.shipping = 4.99;
    } else {
      this.shipping = 0;
    }
    this.tax = this.total * 0.1;
    this.totaltoal = this.total + this.shipping;
  }
  // rubric53 rubric54
  // this function is called if the user deletes an item, with the function 'getTotal' and 'calclate' all the values are updated
  delItems(index: number) {
    for (let i = 0; i < this.Items[index].quantaty; i++) {
      this.app.itemscount--;
    }
    this.paramData.delItems(index);
    this.Items = this.paramData.getItems();
    this.getTotal();
    this.calculate();
  }
  getTotal() {
    if (this.Items) {
      if (this.Items.length !== undefined) {
        for (const item of this.Items) {
          if (item.quantaty !== undefined) {
            item.totalPrice = item.price * item.quantaty;
          } else {
            item.totalPrice = item.price;
            item.quantaty = 1;
          }
        }
      } else {
        const single: any = this.Items;
        single.totalPrice = single.price * single.quantaty;
        this.Items = single;
      }
      let i = 0;
      this.total = 0;
      const temp: any = this.Items;
      if (this.Items) {
        if (this.Items.length === undefined) {
          this.total = temp.price * temp.quantaty;
        } else {
          for (const item of this.Items) {
            this.total += item.price * item.quantaty;
            Math.round(this.total);
            i++;
          }
        }
      }
    }
  }
  chainItems() {
    if (this.Items) {
      for (let i = 0; i < this.Items.length; i++) {
        for (let j = 0; j < this.Items.length; j++) {
          if (i !== j) {
            if (this.Items[i].name === this.Items[j].name) {
              this.Items[i].quantaty = +this.Items[i].quantaty + +this.Items[j].quantaty;
              this.Items.splice(j, 1);
              i = 0;
            }
          }
        }
      }
      this.paramData.storeData(this.Items);
      this.getTotal();
    }
  }
  alert(name: string, city: string, address: string, phnumber: string) {
    // rubric52
    // validation check for the checkout button
    const forms = document.getElementsByClassName('needs-validation');
    const validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', (event) => {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // rubric51
          // the alert that is created from the checkout button
          alert('Your information was received, \nName: ' + name + '\nCity: ' + city + '\nAddress: ' + address
            + '\nPhone Number: ' + phnumber + '\nTotal Cost: ' + this.totaltoal + '€');
          const itemslength = this.Items.length;
          for (let i = 0; i < itemslength; i++) {
            this.delItems(0);
          }
        }
        form.classList.add('was-validated');
      }, false);
    });
  }
  // rubric55
  // everything updates based on the quantaty of the item
  changeQuant(index: number, value: any) {
    if (value !== '') {
      if (this.Items.length !== undefined) {
        this.Items[index].quantaty = value;
      } else {
        const temp: any = this.Items;
        temp.quantaty = value;
        this.Items = temp;
      }
      this.getTotal();
      this.calculate();
      this.paramData.clearCart();
      this.paramData.storeData(this.Items);
      this.app.itemscount = this.paramData.getItemCount();
    }
  }
}
