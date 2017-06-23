import {Component, OnInit} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';
import {ApiService} from "../app.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [ApiService]
})
export class ScheduleComponent implements OnInit {

  controllers: Array<any>;
  talk: Object = [];
  speaker: Object = [];
  baseUrl: Object;

  constructor(private navService: NavService, private router: Router, private apiService: ApiService) {
    this.baseUrl = apiService.baseUrl;
  }

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

  openDetail(id) {
    console.log(id);
    this.getTalk(id);
  }

  getTalk(id){
    this.apiService.get(`/api/talk/findById/`+id)
        .subscribe((res: Response) => {
          this.talk = res.json()[0];
          this.speaker = this.talk['speaker'];
          console.log(this.talk);
          console.log(this.speaker);
        });
  }

  hasRoute(controllerName: string): boolean {
    return this.router.config.some((route: Route) => {
      if (route.path === controllerName) {
        return true;
      }
    });
  }
}
