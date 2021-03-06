import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketComponent implements OnInit {

  controllers: Array<any>;

  constructor(private navService: NavService, private router: Router) { }

  ngOnInit(): void {
    this.navService.getNavData().subscribe(applicationData => {
      this.controllers = applicationData.controllers.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    });
  }

  sendToTito() {
    window.location.href='https://ti.to/midwestjs/2018-midwest-js-conference';
  }

  hasRoute(controllerName: string): boolean {
    return this.router.config.some((route: Route) => {
      if (route.path === controllerName) {
        return true;
      }
    });
  }
}
