import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-match-set',
  templateUrl: './match-set.page.html',
  styleUrls: ['./match-set.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MatchSetPage implements OnInit {

  scoreA: number = 0;
  scoreB: number = 0;

  data: any[] = []

  constructor(private navCtrl: NavController, private storageService: StorageService) {
    addIcons({ add })
  }

  viewSet(id: string) {
    this.navCtrl.navigateForward(['setinfo'], { queryParams: { id } });
  }

  delete(id: string) {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }

    this.storageService.update('set', JSON.stringify(this.data)).then(() => {
      this.getData();
    })
  }

  addSet() {
    this.navCtrl.navigateForward(['create-set'])
  }

  getData() {
    this.storageService.get('set').then((res) => {
      const setJson = JSON.parse(res)
      this.data = setJson;
    })
  }

  ionViewDidEnter() {
    this.getData();
  }


  ngOnInit() {
    return null;
  }

}
