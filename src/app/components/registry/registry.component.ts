import { Component, OnInit } from '@angular/core';
import { APIDockerService } from 'src/app/core/services/api-docker.service';
import { ConfigurationService } from '../../core/services/configuration.service';
import { ConfigurationModel } from 'src/app/core/models/configuration.model';
import { Registry } from 'src/app/core/models/api/registry';


@Component({
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  registries: Registry[];

  constructor( public api:APIDockerService) { 
  }

  ngOnInit() {
       
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
