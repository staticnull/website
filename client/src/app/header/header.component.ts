import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  controllers: Array<any>;
  daysUntil: number = 0;
  hoursUntil = 0;
  minutesUntil = 0;
  secondsUntil = 0;


  constructor(private navService: NavService, private router: Router) { }

  ngOnInit(): void {
    var dateOfConference: Date = new Date('2017-08-16');
    var tilThen: any = this.getTimeRemaining(dateOfConference);
    this.daysUntil = tilThen.days;
    this.hoursUntil = tilThen.hours;
    this.minutesUntil = tilThen.minutes;
    this.secondsUntil = tilThen.seconds;

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

  getTimeRemaining(endTime: any): any {
    var t = endTime.valueOf() - new Date().valueOf();
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 ) + 6;
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }


  hasRoute(controllerName: string): boolean {
    return this.router.config.some((route: Route) => {
      if (route.path === controllerName) {
        return true;
      }
    });
  }
}
