import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectMunchkinComponent } from './project-munchkin/project-munchkin.component';
import { ProjectGenesisComponent } from './project-genesis/project-genesis.component';
import { ProjectItlabComponent } from './project-itlab/project-itlab.component';
import { ProjectSotfComponent } from './project-sotf/project-sotf.component';
import { HomeComponent } from './home/home.component';
import { KompasComponent } from './kompas/kompas.component';
import { RetrospectiveComponent } from './retrospective/retrospective.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectMunchkinComponent,
    ProjectGenesisComponent,
    ProjectItlabComponent,
    ProjectSotfComponent,
    HomeComponent,
    KompasComponent,
    RetrospectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
