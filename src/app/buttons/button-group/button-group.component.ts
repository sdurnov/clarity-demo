import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGroupComponent implements OnInit {
  buttonOptionsForm = new FormGroup({
    buttonGroupType: new FormControl('Button'),
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
