import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debug-routes',
  template: '<pre>{{ routes | json }}</pre>',
})
export class DebugRoutesComponent {
  routes: any;

  constructor(private router: Router) {
    this.routes = this.router.config;
  }
}
