import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HelpComponent } from './components/help/help.component';
import { DocumentComponent } from './components/subcomponents/document/document.component';
import { SearchComponent } from './components/subcomponents/search/search.component';
import { RegistryComponent } from './components/registry/registry.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './core/services/auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent,
          data: { title: 'RepositoryNook UI', leftNavBar: true}},
  { path: 'home', component: HomeComponent,
          data: { title: 'RepositoryNook UI', leftNavBar: true} },
  { path: 'config', component: ConfigComponent,
          data: { title: 'Configuration', leftNavBar: false} },
  { path: 'help', component: HelpComponent,
          data: { title: 'Help', leftNavBar: false} },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'registry', component: RegistryComponent,
          data: { title: 'Registry selection', leftNavBar: false} },
  { path: 'documents', 
          component: DocumentsComponent,
          children: [
            { path: 'search', component: SearchComponent },
            { path: 'document', component: DocumentComponent }
          ],
          data: { title: 'Documents', leftNavBar: false} },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})], //https://stackoverflow.com/questions/40983055/how-to-reload-the-current-route-with-the-angular-2-router
  exports: [RouterModule]
})
export class AppRoutingModule { }

