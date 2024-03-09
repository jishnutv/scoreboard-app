import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { playOutline } from 'ionicons/icons';
import { VideoService } from '../services/video.service';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRow,
    IonCol,
    IonItem,
    IonList,
    IonIcon,
    IonLabel,
    IonContent,
    IonGrid,
    CommonModule,
    FormsModule,
  ],
})
export class ManagePage implements OnInit {
  constructor(private videoService: VideoService) {
    addIcons({ playOutline });
  }

  videos: any[] = [
    {
      name: 'Intro',
      url: '../../assets/videos/intro.mp4',
    },
    {
      name: 'Video 1',
      url: '../../assets/videos/01.mp4',
    },
    {
      name: 'Video 2',
      url: '../../assets/videos/02.mp4',
    },
    {
      name: 'Video 3',
      url: '../../assets/videos/03.mp4',
    },
    {
      name: 'Video 4',
      url: '../../assets/videos/04.mp4',
    },
    {
      name: 'Video 5',
      url: '../../assets/videos/05.mp4',
    },
    {
      name: 'Video 6',
      url: '../../assets/videos/06.mp4',
    },
    {
      name: 'Video 7',
      url: '../../assets/videos/07.mp4',
    },
    {
      name: 'Video 8',
      url: '../../assets/videos/08.mp4',
    },
    {
      name: 'Video 9',
      url: '../../assets/videos/09.mp4',
    },
    {
      name: 'Video 10',
      url: '../../assets/videos/10.mp4',
    },
    {
      name: 'Video 11',
      url: '../../assets/videos/11.mp4',
    },
    {
      name: 'Video 12',
      url: '../../assets/videos/12.mp4',
    },
  ];

  playVideo(url: string) {
    this.videoService.changeVideo(url);
  }

  ngOnInit() {
    return null;
  }
}
