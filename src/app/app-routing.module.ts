import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KompasComponent } from './kompas/kompas.component';
import { ProjectGenesisComponent } from './project-genesis/project-genesis.component';
import { ProjectItlabComponent } from './project-itlab/project-itlab.component';
import { ProjectMunchkinComponent } from './project-munchkin/project-munchkin.component';
import { ProjectSotfComponent } from './project-sotf/project-sotf.component';
import { RetrospectiveComponent } from './retrospective/retrospective.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'genesis', component: ProjectGenesisComponent},
  { path: 'itlab', component: ProjectItlabComponent},
  { path: 'munchkin', component: ProjectMunchkinComponent},
  { path: 'sotf', component: ProjectSotfComponent},
  { path: 'kompas', component: KompasComponent},
  { path: 'retrospective', component: RetrospectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
