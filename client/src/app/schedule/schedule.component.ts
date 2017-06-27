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
  speaker2: Object = [];
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
          console.log(this.speaker['id']);
          if(this.speaker['id'] == 79) {
            this.getSecondSpeaker(84)
          } else if (this.speaker['id'] == 84) {
            this.getSecondSpeaker(79)
          } else {
            this.speaker2 = [];
          }
        });
  }

  getSecondSpeaker(id){
    this.apiService.get(`/api/speaker/findById/`+id)
        .subscribe((res: Response) => {
          this.speaker2 = res.json()[0];
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
