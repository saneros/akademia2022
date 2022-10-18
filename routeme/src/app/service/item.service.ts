import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private cachedItems: Item[] = [];

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    if (this.cachedItems.length) {
      return of(this.cachedItems);
    }
    return this.httpClient.get<{ data: { memes: Item[] }}>('https://api.imgflip.com/get_memes').pipe(
      map(response => response.data.memes),
      tap((items) => this.cachedItems = items));
  }

  getItemById(id: string): Observable<Item> {
    return this.getItems().pipe(
      map((items) => items.filter((item) => item.id === id)[0])
    );
  }

}
