import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigurationModel } from '../../core/models/configuration.model';
import { ConfigurationService } from '../../core/services/configuration.service';
import { APIRepositoryNookService } from 'src/app/core/services/api-repository-nook.service';
import { APIDockerService } from 'src/app/core/services/api-docker.service';

@Component({
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss']
})
export class ConfigComponent implements OnInit {

    configuration: ConfigurationModel;

    constructor(public configSvc: ConfigurationService
              , public repositoryNook: APIRepositoryNookService
              , public docker: APIDockerService) { } 

    hide: boolean;

    ngOnInit(): void {
        this.configuration = this.configSvc.settings;
    }

    onRepositoryPingClick() { 
        this.repositoryNook.Ping();
    }
    onRepositoryGetVersionClick(){
        this.repositoryNook.GetVersion();
    }

    onDockerPingClick() {
        this.docker.Ping();
    }

    onChange() {
        this.configSvc.settings = this.configuration;
    }
} 
