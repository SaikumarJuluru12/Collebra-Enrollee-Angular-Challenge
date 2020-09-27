import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditableTableComponent } from './editable-table/editable-table.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatDialogModule,
  MatButtonModule, MatIconModule, MatGridListModule, MatSortModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

import { NotifierModule } from 'angular-notifier';

import { NgxSpinnerModule } from 'ngx-spinner';
import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnroleeClientService } from 'src/services/enrolee-client.service';
import { SharedModule } from './shared.module';
import { AssertNotNull } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EditableTableComponent
      ],
      imports: [HttpClientModule, SharedModule, FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule, NotifierModule],
      providers: [EnroleeClientService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enrolleeWeb'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('enrolleeWeb');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Enrollee Web!');
  });
  it('should get enrolees from service', () => {
    debugger;
    const fixture = TestBed.createComponent(AppComponent);
    const enrolleeService = TestBed.get(EnroleeClientService)

    spyOn(enrolleeService, 'getEnrollees').and.returnValue(res => {
      debugger;
      expect(res.length).toBeGreaterThan(0)
    })
  });

});
