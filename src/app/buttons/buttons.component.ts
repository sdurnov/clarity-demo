import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent implements OnInit {
  private readonly subscription$: Subscription = new Subscription();

  buttonOptionsForm = new FormGroup({
    controlType: new FormControl('Button'),
    buttonType: new FormControl('Solid'),
    isSmall: new FormControl(false),
    isLeftIconEnabled: new FormControl(false),
    isTextEnabled: new FormControl(true),
    isRightIconEnabled: new FormControl(false),
  });

  showDetails: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subscription$.add(router.events //
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          console.warn(this.router.url);
          if (this.route.routeConfig?.component instanceof ButtonComponent) {
            this.showDetails = true;
          } else {
            this.showDetails = false;
          }
        }
      }))
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
