import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  item: Item | undefined;

  private itemId: string = '55311130';

  constructor(private service: ItemService) {
    this.service.getItemById(this.itemId).subscribe((item) => this.item = item);
  }

}
