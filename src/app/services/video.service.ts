import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() {
    this.socket.on('videoChange', (newSource: string) => {
      this.currentVideoSource.next(newSource);
    });

    this.socket.on('score', (newSource: string) => {
      this.scoreData.next(newSource);
    });

    this.socket.on('set', (newSource: string) => {
      this.setData.next(newSource);
    });

    this.socket.on('connect', () => {
      console.log('A user connected');
    });

    this.socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  }

  private currentVideoSource = new BehaviorSubject<string>('../../assets/videos/intro.mp4');
  currentVideo = this.currentVideoSource.asObservable();

  private scoreData = new BehaviorSubject<string>('{"scoreA": "0", "scoreB": "0"}');
  currentScore = this.scoreData.asObservable();

  private setData = new BehaviorSubject<string>('{}');
  currentSet = this.setData.asObservable();

  private socket = io('https://scoreboard-server-production-01ef.up.railway.app');

  changeVideo(newSource: string) {
    this.socket.emit('videoChange', newSource);
  }

  changeScore(score: string) {
    this.socket.emit('score', score);
  }

  sendSetInfo(info: string) {
    this.socket.emit('set', info);
  }
}
