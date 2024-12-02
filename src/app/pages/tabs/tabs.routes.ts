import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'game',
        loadComponent: () =>
          import('../game/game.page').then((m) => m.GamePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'score',
        loadComponent: () =>
          import('../score/score.page').then((m) => m.ScorePage),
      },
      {
        path: '',
        redirectTo: '/tabs/game',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/game',
    pathMatch: 'full',
  },
];
