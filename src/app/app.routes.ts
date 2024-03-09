import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'scoreboard',
    loadComponent: () => import('./scoreboard/scoreboard.page').then( m => m.ScoreboardPage)
  },
  {
    path: 'video',
    loadComponent: () => import('./video/video.page').then( m => m.VideoPage)
  },
  {
    path: 'manage',
    loadComponent: () => import('./manage/manage.page').then( m => m.ManagePage)
  },
  {
    path: 'match-set',
    loadComponent: () => import('./match-set/match-set.page').then( m => m.MatchSetPage)
  },
  {
    path: 'create-set',
    loadComponent: () => import('./create-set/create-set.page').then( m => m.CreateSetPage)
  },
  {
    path: 'setinfo',
    loadComponent: () => import('./setinfo/setinfo.page').then( m => m.SetinfoPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
];
