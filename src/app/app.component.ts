import { Component, HostListener } from '@angular/core';
import { IonApp, IonRouterOutlet, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private navCtrl: NavController) { }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key === ',') {
      this.navCtrl.navigateRoot('scoreboard');
    } else if (event.key === '.') {
      this.navCtrl.navigateRoot('video');
    }
  }
}
