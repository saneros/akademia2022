import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../service/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  item: Item | undefined;

  constructor(private service: ItemService, private activatedRoute: ActivatedRoute, private router: Router) {
    const itemId = this.activatedRoute.snapshot.paramMap.get('id');
    if (itemId) {
      this.service.getItemById(itemId).subscribe((item) => {
        if (item) {
          this.item = item;
        } else {
          this.noItemFound();
        }
      });
    } else {
      this.noItemFound();
    }
  }

  noItemFound(): void {
    this.router.navigate(['items'], { replaceUrl: true });
  }

}
