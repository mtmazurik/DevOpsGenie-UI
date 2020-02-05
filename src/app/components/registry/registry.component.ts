import { Component, OnInit } from '@angular/core';
import { APIDocker } from 'src/app/core/services/api-docker.service';
import { ConfigurationService } from '../../core/services/configuration.service';
import { ConfigurationModel } from 'src/app/core/models/configuration.model';
import { Registry } from 'src/app/core/models/api/registry';


@Component({
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  registries: Registry[];
  settings: ConfigurationModel;

  constructor( public configSvc:ConfigurationService, public api:APIDocker) { 
  }

  ngOnInit() {
    
    this.settings = this.configSvc.settings;

    
    this.api.GetRegistries().subscribe(
          (registries: Registry[]) => { this.registries = registries; }
        );
  }

/*   onChangeDatabaseSelection() {
    
    this.configSvc.settings = this.settings;
    this.collections = null;

    this.api.GetCollections().subscribe(
          (collections: Collection[]) => { this.collections = collections; }
        );
  } */
}
