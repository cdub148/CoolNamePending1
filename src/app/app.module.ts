import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

import { AppRoutes} from './app-routes';
import { SpeedComponent } from './speed/speed.component';
import { LengthComponent } from './length/length.component';
import { VolumeComponent } from './volume/volume.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainContentComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    SpeedComponent,
    LengthComponent,
    VolumeComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
