import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'dashboard' }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'progress' }
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'graficas' }
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Ajuste de layout' }
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
