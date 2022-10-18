import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  routes: Route[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routes = this.router.config.filter((route: Route) => route.data && route.data['showInMenu']);
  }

}
