import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent implements OnInit {
  buttonOptionsForm = new FormGroup({
    controlType: new FormControl('Button'),
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
