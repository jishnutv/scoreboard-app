import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VideoPage implements OnInit {
  videoSrc!: string;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.currentVideo.subscribe(newSrc => {
      this.videoSrc = newSrc;
    });
  }
}
