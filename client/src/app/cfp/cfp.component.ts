import {Component, OnInit, NgModule} from '@angular/core';
import {NavService} from '../nav/nav.service';
import {Route, Router} from '@angular/router';
import {Response} from "@angular/http";
import {ApiService} from "../app.service";
import {Observable} from 'rxjs/Rx';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cfp',
  templateUrl: './cfp.component.html',
  styleUrls: ['./cfp.component.css'],
  providers: [ApiService]
})
export class CfpComponent implements OnInit {

  controllers: Array<any>;
  json: Observable<String>;
  cfpForm: FormGroup;
  talks: number = 1;
  activeTalk: number = 0;
  talksArray: Object[];
  submitted: boolean = false;

  formErrors = {
    'fullName': '',
    'email': '',
    'twitter': '',
    'github': ''
  };

  validationMessages = {
    'fullName': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.'
    },
    'email': {
      'required': 'Email is a required field.',
      'pattern': 'A valid email is required.'
    },
    'twitter': {
      'pattern': 'Please enter the full url to your twitter profile.'
    },
    'github': {
      'pattern': 'Please enter the full url to your github profile.'
    }
  };

  constructor(private navService: NavService,
              private router: Router,
              private apiService: ApiService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.buildForm();

    this.talksArray = Array.from(Array(this.talks),(x,i)=>i);

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

  buildForm(): void {
    this.cfpForm = this.fb.group({
      'fullName': ["", Validators.compose([Validators.required, Validators.minLength(2)])],
      'email': ["", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")])],
      'twitter': ["", Validators.pattern("^http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)")],
      'github': ["", Validators.pattern("^http(?:s)?:\/\/(?:www\.)?github\.com\/([a-zA-Z0-9_]+)")],
      'employer': ["", null],
      'position': ["", null],
      'bio': ["", null],
      'travelingFrom': ["", null],
      'travel': [false, null],
      'accommodations': [false, null],

    });
    this.cfpForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.cfpForm) { return; }
    const form = this.cfpForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  
  addTalk(event): void {
    this.talks++;
    this.activeTalk = this.talks-1;
    this.talksArray = Array.from(Array(this.talks),(x,i)=>i);
  }

  selectTalk(talk) {
    this.activeTalk = talk;
  }


  onSubmit(event): void {
    var talkArray = [];
    for (let input of event.target) {
      var talkTitle;
      var talkNumber;
      var talkAbstract;
      if (input['name'].indexOf('title') > -1) {
        talkTitle = input['value'];
        var nameSplit = input['name'].split("_");
        talkNumber = nameSplit[nameSplit.length - 1];
        for (let input of event.target) {
          if (input['name'].indexOf('abstract_'+talkNumber) > -1) {
            talkAbstract = input['value'];
            talkArray.push({"title":talkTitle,"talkAbstract":talkAbstract})
          }
        }
      }
    }
    this.cfpForm.value['talks'] = talkArray;
    this.apiService.post(`/api/cfp`, JSON.stringify(this.cfpForm.value))
      .subscribe((res: Response) => {
        this.json = res.json();
        this.submitted = true;
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
