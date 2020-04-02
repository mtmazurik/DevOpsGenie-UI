import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { ConfigurationService } from './configuration.service';
import { Registry } from '../models/api/registry';
import { Response } from '../models/api/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIDockerService {

  constructor( public httpClient: HttpClient
             , public config:ConfigurationService
             , public notify:NotificationService) { 
  }

  response:Response;
  registries: Registry[];

  //
  // Get Registries - makes a local call to the Docker for Windows local image registry, gets all information for the locally installed images
  //
  GetRegistries() : Observable<any> {
    let uri: string = this.baseURI() + "/v1.18/images/json?all=1 HTTP/1.1";   // hardcoded for local
    this.registries = [];
    this.httpClient
      .get(uri, { 
                  responseType: 'json', 
                  // headers: new HttpHeaders()
                  //     .set("Authorization", `Bearer ${this.auth.token}`)
      })
      .subscribe( body => {
                    this.response = body as Response;
/*                     for(var i=0; i < this.response.data.length; i++) {   // this likely isn't going to MAP into json properly, need to get map from POSTMAN call to API locally of Docker for Windows
                      this.registries.push( JSON.parse(this.response.data[i].toString()) as Registry)
                    } */
                  },
                  error => this.notify.open('GET Collections error. Check Configuration/Settings and retry.', 'error')
            );
    const registriesObservable = new Observable(observer => {
        setTimeout(() => {
            observer.next(this.registries);
        }, 1000);
    });
    return registriesObservable;
  }

  Ping(){ 
      let uri:string =  this.baseURI() + '/v1.18/_ping';   
      this.httpClient
          .get(uri, {responseType: "text",
                     headers: new HttpHeaders()
                     .set("Access-Control-Allow-Headers","Origin, Accept, X-Requested-With, Content-Type")
                     .set("Access-Control-Allow-Origin", "*")
                      })
          .subscribe( 
              respBody => this.notify.open(respBody, 'info', 3),
              error => this.notify.open('Ping error. Check Docker Engine URI and port number and  retry.', 'error')
          );
  }

  private baseURI() {
    return this.config.settings.imageRegistryURI + ':' + this.config.settings.imageRegistryPort;
  }
}