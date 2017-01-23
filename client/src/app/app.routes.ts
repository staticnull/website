import {Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TicketComponent} from "./tickets/tickets.component";
import {SpeakersComponent} from "./speakers/speakers.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {CfpComponent} from "./cfp/cfp.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'cfp', component: CfpComponent},
    {path: 'register', component: SpeakersComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'speakers', component: SpeakersComponent},
    {path: 'supporters', component: SponsorsComponent},
    {path: 'tickets', component: TicketComponent},
];

