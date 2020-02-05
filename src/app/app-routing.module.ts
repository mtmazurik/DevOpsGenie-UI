import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HelpComponent } from './components/help/help.component';
import { DocumentComponent } from './components/subcomponents/document/document.component';
import { SearchComponent } from './components/subcomponents/search/search.component';
import { RegistryComponent } from './components/registry/registry.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
          data: { title: 'RepositoryNook UI', leftNavBar: true}},
  { path: 'home', component: HomeComponent,
          data: { title: 'RepositoryNook UI', leftNavBar: true} },
  { path: 'config', component: ConfigComponent,
          data: { title: 'Configuration', leftNavBar: false} },
  { path: 'help', component: HelpComponent,
          data: { title: 'Help', leftNavBar: false} },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

