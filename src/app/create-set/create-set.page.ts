import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-create-set',
  templateUrl: './create-set.page.html',
  styleUrls: ['./create-set.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateSetPage implements OnInit {
  setName: string = '';
  teama: string = '';
  teamb: string = '';
  teamNexta: string = '';
  teamNextb: string = '';

  newData: any[] = [];

  constructor(private storageService: StorageService, private navCtrl: NavController) { }

  submit() {
    const data = {
      id: Date.now().toString(),
      setName: this.setName,
      scorea: 0,
      scoreb: 0,
      teama: this.teama,
      teamb: this.teamb,
      teamNexta: this.teamNexta,
      teamNextb: this.teamNextb
    }

    console.log(data);

    this.storageService.get('set').then((res) => {
      const prevData = JSON.parse(res);

      if (prevData == null) {
        this.newData.push(data);
        this.saveSet(this.newData);
      }else {
        this.newData = prevData;
        this.newData.push(data);
        this.saveSet(this.newData);
      }
    })
  }

  saveSet(data: any[]) {
    this.storageService.set('set', JSON.stringify(data)).then(() => {
      this.navCtrl.navigateBack('match-set');
    })
  }

  ngOnInit() {
    return null;
  }

}
