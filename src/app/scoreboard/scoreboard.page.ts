import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { VideoService } from '../services/video.service';
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/angular/standalone';

interface OverlayBg {
  color1: string;
  color2: string;
  angle: number;
  backgroundImage?: SafeStyle;
}

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.page.html',
  styleUrls: ['./scoreboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol, CommonModule, FormsModule]
})
export class ScoreboardPage implements OnInit {

  mainBg: string = 'https://png.pngtree.com/background/20231016/original/pngtree-women-s-volleyball-pros-showcase-skills-on-3d-stadium-court-picture-image_5574813.jpg';
  overlay: OverlayBg = {
    color1: 'rgba(14,4,28,0.8)',
    color2: 'rgba(9,36,121,0.8)',
    angle: 90,
  }

  score: any;
  setInfo: any;

  constructor(private sanitizer: DomSanitizer, private videoService: VideoService) {
    this.overlay.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
      `linear-gradient(${this.overlay.angle}deg, ${this.overlay.color1}, ${this.overlay.color2})`
    );
  }

  ngOnInit() {
    this.videoService.currentScore.subscribe(newScore => {
      this.score = JSON.parse(newScore);
    });

    this.videoService.currentSet.subscribe(newScore => {
      this.setInfo = JSON.parse(newScore);

      console.log(this.setInfo);
    });
  }
}
