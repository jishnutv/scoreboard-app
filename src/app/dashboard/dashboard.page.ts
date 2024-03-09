import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  IonGrid,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCol,
    IonRow,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonGrid,
    CommonModule,
    FormsModule,
  ],
})
export class DashboardPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  goto(page: string) {
    if (page === 'scoreboard') {
      window.open(page, '_blank');
    } else {
      this.navCtrl.navigateForward(page);
    }
  }

  ngOnInit() {
    return null;
  }
}
