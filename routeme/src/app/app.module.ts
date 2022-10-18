import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component/app.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { MenuComponent } from './component/menu/menu.component';
import { ItemsComponent } from './component/items/items.component';
import { DisclaimerComponent } from './component/disclaimer/disclaimer.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MenuComponent,
    ItemsComponent,
    DisclaimerComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
