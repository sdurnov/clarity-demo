import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  buttonOptionsForm = new FormGroup({
    buttonType: new FormControl('Solid'),
    isSmall: new FormControl(false),
    isLeftIconEnabled: new FormControl(false),
    isTextEnabled: new FormControl(true),
    isRightIconEnabled: new FormControl(false),
    isBlock: new FormControl(false),
    isLoading: new FormControl(false)
  });

  loadingState: ClrLoadingState = ClrLoadingState.LOADING;

  loadingStateOff: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor() { }

  ngOnInit(): void {
  }

}
