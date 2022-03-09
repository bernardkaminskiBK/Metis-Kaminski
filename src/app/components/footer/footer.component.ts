import { Component } from '@angular/core';
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  facebookIcon = faFacebook;
  dinIcon = faLinkedin;
  gitIcon = faGithub;
  instaIcon = faInstagram;
}
