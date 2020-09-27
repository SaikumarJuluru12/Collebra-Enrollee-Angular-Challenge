import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
// import { DialogComponent } from './dialog/dialog.component'

export interface Data {
  operation: string;
  data: [string];
}

@Component({
  selector: 'app-editable-table',
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent implements OnInit {

  //Parent to Child
  @Input() data: any;
  @Input() columns: any
  @Input() editableColumns: any;
  @Input() dateColumns: any;
  @Input() pageSizeOptions: [string];
  @Input() notification: any;
  @Input() searchable: boolean;
  @Input() maxChar: number;

  //Child to Parent
  @Output() action = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = null
  editableFields = [];
  dateFields = [];
  paginationOptions = [];
  readonly notifier: NotifierService;
  k: number;
  rowData: Data;
  isSearchable: boolean;
  selectedRowIndex: number = -1;
  maxCharsInColumn: number;
  message: string;
  isEnabled: boolean;
  isAddRequired: boolean;


  dataSource = new MatTableDataSource(null);
  constructor(public dialog: MatDialog, notifierService: NotifierService, private spinner: NgxSpinnerService) {
    this.notifier = notifierService
  }

  ngOnInit() {
    // assign data from Parent component set by the users
    this.displayedColumns = this.columns // columns
    this.dataSource.data = this.data // data
    this.editableFields = this.editableColumns // editable columns
    this.dateFields = this.dateColumns // date type
    this.paginationOptions = this.pageSizeOptions // page size options
    this.dataSource.paginator = this.paginator // pagination
    this.dataSource.sort = this.sort; // sorting
    this.isSearchable = this.searchable; // search
    this.maxCharsInColumn = this.maxChar; // maximum charatcters in a column
    this.isAddRequired = true // this is for local dev and testing // this feature will be implemented in next version
  }

  // Search
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEdit(rowData: any, i: number) {
    this.k = i
    this.highlight(rowData)
  }

  closeEdit(rowData: any) {
    this.k = -1
    this.selectedRowIndex = -1;
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return year + '-' + [monthIndex + 1] + '-' + day;
  }

  doneEdit(rowData: any) {
    for (var prop in rowData) {
      if (rowData[prop] instanceof Date) {
        rowData[prop] = this.formatDate(rowData[prop])
      }
    }
    rowData["operation"] = 'updated';

    this.spinner.show();
    this.action.emit(rowData);

    if (this.notification && this.notification.length > 0)
      this.UI_notifications(this.notification[0], this.notification[1]);
    else
      this.UI_notifications('success', 'Enrollee updated Successfully!'); // default update notification
  }

  // Highlight row on edit click
  highlight(row) {
    this.selectedRowIndex = row.id;
  }

  // UI toast notifications
  UI_notifications(status: string, message: string) {
    setTimeout(() => {
      /** spinner ends after 1 seconds */
      this.spinner.hide();
      this.closeEdit('UI_notifications')
      this.notifier.notify(status, message);
    }, 1000);

  }
}