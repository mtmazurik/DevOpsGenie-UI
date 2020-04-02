import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ConfigurationModel } from '../models/configuration.model';

@Injectable({
  providedIn: 'root'  //makes it a singleton service
})
//
// ConfigurationService - for reading in environment and reading/saving run-time config settings
//
export class ConfigurationService {

  private _configurationSettings: ConfigurationModel;
  private _isLoaded = false;

  constructor(){    
    this.loadSettings();
  }
  set settings( value ) { 
    this._configurationSettings = value;
  }
  get settings() {
    return this._configurationSettings;
  }
  public loadSettings()
  {
    this._configurationSettings = {  

      // need separate StartupConfig.model.ts which is hydrated from secrets - here (will hard-code for now; separate story for secrets)
      //reponook specific secrets
      serviceAddress: "http://10.244.1.21",
      servicePort: 8190,
      //auth0 secrets
      auth0ClientId: "Tl3SnziPkp4qRjRuajZWfrAeMn6Dxwr6",
      auth0ClientSecret: "Ep36WseJFCSnU5IsMdDxJh_JKyhlyKDfw0_epmihC4JroW1SvVtvDa9BHuwDGPMJ",
      auth0Audience: "endpoint-security.containernooks.com",
      auth0GrantType: "client_credentials",
      
      // refactor out-> new model:   ImageRegistry.model.ts  an array part of a bigger
      // TenantConfig.model.ts   that will store in RepositoryNook and be retrieved by TenantId
      //
      // json repository key: "configurationType:imageRegistry"
      // database: dog-ui    collection: configuration
      imageRegistryURI: "http://marty-lenovo.com",
      imageRegistryPort: 2375
      /*
{
  "imageRegistries": [
    { "tenantId":"CCA",
      "imageRegistryId":"1",
      "uri":"http://marty-lenovo.com",
      "port":"2375",
      "type":"DockerForWindows",
      "username":"",
      "password":""
    },
    { "tenantId":"CCA",
      "imageRegistryId":"2",
      "uri":"gcr.io/repositorynookproject-263716",
      "port":"80",
      "type":"gcloud",
      "username":"mtmazurik@cloudcomputingassociates.com",
      "password":"{usual}$"
    }
  ]
}
      */
     // schema
/*
{
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The Root Schema",
    "description": "The root schema comprises the entire JSON document.",
    "required": [
        "imageRegistries"
    ],
    "properties": {
        "imageRegistries": {
            "$id": "#/properties/imageRegistries",
            "type": "array",
            "title": "The Imageregistries Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "items": {
                "$id": "#/properties/imageRegistries/items",
                "type": "object",
                "title": "The Items Schema",
                "description": "An explanation about the purpose of this instance.",
                "default": {},
                "examples": [
                    {
                        "imageRegistryId": "1",
                        "port": "2375",
                        "type": "DockerForWindows",
                        "password": "",
                        "username": "",
                        "uri": "http://marty-lenovo.com",
                        "tenantId": "CCA"
                    },
                    {
                        "uri": "gcr.io/repositorynookproject-263716",
                        "tenantId": "CCA",
                        "port": "80",
                        "imageRegistryId": "2",
                        "type": "gcloud",
                        "password": "{usual}$",
                        "username": "mtmazurik@cloudcomputingassociates.com"
                    }
                ],
                "required": [
                    "tenantId",
                    "imageRegistryId",
                    "uri",
                    "port",
                    "type",
                    "username",
                    "password"
                ],
                "properties": {
                    "tenantId": {
                        "$id": "#/properties/imageRegistries/items/properties/tenantId",
                        "type": "string",
                        "title": "The Tenantid Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "CCA"
                        ]
                    },
                    "imageRegistryId": {
                        "$id": "#/properties/imageRegistries/items/properties/imageRegistryId",
                        "type": "string",
                        "title": "The Imageregistryid Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "1"
                        ]
                    },
                    "uri": {
                        "$id": "#/properties/imageRegistries/items/properties/uri",
                        "type": "string",
                        "title": "The Uri Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "http://marty-lenovo.com"
                        ]
                    },
                    "port": {
                        "$id": "#/properties/imageRegistries/items/properties/port",
                        "type": "string",
                        "title": "The Port Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "2375"
                        ]
                    },
                    "type": {
                        "$id": "#/properties/imageRegistries/items/properties/type",
                        "type": "string",
                        "title": "The Type Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            "DockerForWindows"
                        ]
                    },
                    "username": {
                        "$id": "#/properties/imageRegistries/items/properties/username",
                        "type": "string",
                        "title": "The Username Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            ""
                        ]
                    },
                    "password": {
                        "$id": "#/properties/imageRegistries/items/properties/password",
                        "type": "string",
                        "title": "The Password Schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": "",
                        "examples": [
                            ""
                        ]
                    }
                }
            }
        }
    }
}
*/
    };
  }
}