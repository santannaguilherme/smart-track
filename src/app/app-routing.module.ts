import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { FarmComponent } from './pages/register/farm/farm.component';
import { TractorComponent } from './pages/register/tractor/tractor.component';
import { UserComponent } from './pages/register/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastrar/fazenda',
    component: FarmComponent,
  },
  {
    path: 'cadastrar/operador',
    component: UserComponent,
  },
  {
    path: 'cadastrar/trator',
    component: TractorComponent,
  },
  {
    path: 'notificacoes',
    component: NotificationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
