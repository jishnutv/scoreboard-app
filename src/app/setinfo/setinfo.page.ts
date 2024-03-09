import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-setinfo',
  templateUrl: './setinfo.page.html',
  styleUrls: ['./setinfo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SetinfoPage implements OnInit {
  setInfo: any;
  scoreA: number = 0;
  scoreB: number = 0;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private videoService: VideoService
  ) {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      this.getData(id);
    });
  }

  addScore(team: string) {
    if (team === 'a') {
      this.scoreA = this.scoreA + 1;
      this.sendScore();
    } else {
      this.scoreB = this.scoreB + 1;
      this.sendScore();
    }
  }

  minusScore(team: string) {
    if (team === 'a') {
      this.scoreA = this.scoreA - 1;
      this.sendScore();
    } else {
      this.scoreB = this.scoreB - 1;
      this.sendScore();
    }
  }

  sendScore() {
    const data = {
      scoreA: this.scoreA,
      scoreB: this.scoreB
    }
    const stringData = JSON.stringify(data);

    this.videoService.changeScore(stringData);
  }

  sendSet() {
    const strSet = JSON.stringify(this.setInfo);
    console.log(strSet);
    this.videoService.sendSetInfo(strSet);
  }

  getData(id: string) {
    this.storageService.get('set').then((res) => {
      const setJson: any[] = JSON.parse(res);

      const selected = setJson.filter((item) => item.id === id);

      this.setInfo = selected[0];

      console.log(this.setInfo);
    });
  }

  ngOnInit() {
    return null;
  }
}
