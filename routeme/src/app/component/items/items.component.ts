import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../service/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  items: Observable<Item[]>;

  constructor(private service: ItemService) {
    this.items = service.getItems();
  }

}
