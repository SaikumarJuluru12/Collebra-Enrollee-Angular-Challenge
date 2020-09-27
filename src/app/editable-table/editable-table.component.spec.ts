
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatDialogModule,
    MatButtonModule, MatIconModule, MatGridListModule, MatSortModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

import { NotifierModule } from 'angular-notifier';

import { NgxSpinnerModule } from 'ngx-spinner';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnroleeClientService } from 'src/services/enrolee-client.service';

import { EditableTableComponent } from './editable-table.component';
import { SharedModule } from '../shared.module';

describe('EditableTableComponent', () => {
    let component: EditableTableComponent;
    let fixture: ComponentFixture<EditableTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditableTableComponent],
            imports: [SharedModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditableTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
