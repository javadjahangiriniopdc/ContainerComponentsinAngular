import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core'


@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {
  @Input() public employeeData: any;

  @Output() public employeeChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  employeeChange() {
    console.log(this.employeeData.name);
    this.employeeData.name = 'Name Changed from EmployeeDetail';
    this.employeeChanged.emit(this.employeeData);
  }

}
