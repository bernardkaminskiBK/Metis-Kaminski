import { Component } from '@angular/core';
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AboutDialogComponent} from "../../shared/modal-dialogs/about-dialog/about-dialog.component";

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

  constructor(public dialog: MatDialog) {}

  openAboutDialog() {
    const config: MatDialogConfig = {
      width: '30%'
    }

    const dialogRef = this.dialog.open(AboutDialogComponent, config);
    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
