import { NotifierService } from 'angular-notifier';
import { Component } from '@angular/core';
import { EnroleeClientService } from 'src/services/enrolee-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enrolleeWeb';
  enrollees = [];
  constructor(private enroleeClientService: EnroleeClientService, private notifierService: NotifierService,) {
    this.enroleeClientService.getEnrollees().subscribe((res: any[]) => {
      this.enrollees = res
    }, err => {
      this.notifierService.notify("error", "Failed to get Enrollees");
    })
  }

  updateEnrollee(enrolee) {
    enrolee.active = enrolee.active == "true" ? true : false;
    this.enroleeClientService.upateEnrollee(enrolee).subscribe(res => {
      console.log(res)
    }, err => {
      this.notifierService.notify("error", "Failed to update Enrollee");
    })
  }
}
