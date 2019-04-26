import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SpeedComponent } from './speed/speed.component';
import { LengthComponent } from './length/length.component';
import { VolumeComponent } from './volume/volume.component';

const routes: Routes = [
    {
        path: '',
        component: MainContentComponent
    }, {
        path: 'speed',
        component: SpeedComponent
    }, {
        path: 'length',
        component: LengthComponent
    },
    {
        path: 'volume',
        component: VolumeComponent
    },
    {
        path: '**',
        component: AppComponent
    }
]

export const AppRoutes=RouterModule.forRoot(routes);