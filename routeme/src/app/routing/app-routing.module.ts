import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../component/about-us/about-us.component';
import { DisclaimerComponent } from '../component/disclaimer/disclaimer.component';
import { ItemsComponent } from '../component/items/items.component';
import { ItemDetailsComponent } from '../component/item-details/item-details.component';
import { DisclaimerGuard } from './disclaimer.guard';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent, data: { showInMenu: true} },
  { path: 'disclaimer', component: DisclaimerComponent, data: { showInMenu: true}  },
  { path: 'items', component: ItemsComponent, canActivate: [DisclaimerGuard], data: { showInMenu: true}  },
  { path: 'details/:id', component: ItemDetailsComponent, canActivate: [DisclaimerGuard] },
  { path: '**', redirectTo: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
