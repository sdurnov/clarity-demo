import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {
  dropdownButtonOptionsForm = new FormGroup({
    buttonType: new FormControl('Solid'),
    isSmall: new FormControl(false),
    isLeftIconEnabled: new FormControl(false),
    isTextEnabled: new FormControl(true),
    isRightIconEnabled: new FormControl(false),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
