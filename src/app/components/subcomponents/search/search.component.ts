import { Component, OnInit, Input } from '@angular/core';
import { APIRepositoryNookService } from '../../../core/services/api-repository-nook.service';
import { ConfigurationService} from '../../../core/services/configuration.service';
import { Repository } from '../../../core/models/api/repository'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  filter: string;                 // did the user type in a filter (either a key (name:value) or a tag (name:value) )
  repositoryItems: Repository[];  // returned Repo items

  documentsColumn = ['documents']; //['_id', 'key', 'data']; // column headings

  constructor(public configSvc: ConfigurationService, public api: APIRepositoryNookService) {
   }

  ngOnInit() {
  }

  onSearchClick() {
      this.api.GetAll()
      .subscribe((returnObjects: Repository[]) => {
        this.repositoryItems = returnObjects;
      });
  }

  selectedRowIndex: number = -1;

  highlight(row) {
    this.selectedRowIndex = row._id;
  }
}
