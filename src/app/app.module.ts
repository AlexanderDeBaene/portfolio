import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectMunchkinComponent } from './project-munchkin/project-munchkin.component';
import { ProjectGenesisComponent } from './project-genesis/project-genesis.component';
import { ProjectItlabComponent } from './project-itlab/project-itlab.component';
import { ProjectSotfComponent } from './project-sotf/project-sotf.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectMunchkinComponent,
    ProjectGenesisComponent,
    ProjectItlabComponent,
    ProjectSotfComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
