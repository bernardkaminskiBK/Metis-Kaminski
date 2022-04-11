import {Component, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  name = 'Bernard Kaminski';

  @Input() inputSideNav : MatSidenav;

}
