import { PlayerComponent } from './player/player.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: PlayerComponent, pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(APP_ROUTES);
