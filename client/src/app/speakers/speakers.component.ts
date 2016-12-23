import {Component, OnInit} from '@angular/core';
import {ApiService} from "../app.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css'],
  providers: [ApiService]
})
export class SpeakersComponent {

  speakers: Object;

  constructor(private apiService: ApiService) {
    this.getSpeakers();
  }

  getSpeakers(){
    this.apiService.get(`/api/speaker`)
        .subscribe((res: Response) => {
          this.speakers = res.json();
        });
  }

  getSpeaker(id){
    this.apiService.get(`/api/speaker/`+id)
        .subscribe((res: Response) => {
          this.speakers = res.json();
        });
  }


}
