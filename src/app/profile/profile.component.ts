import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => this.profileJson = JSON.stringify(profile, null, 2)
    );
  }

}
