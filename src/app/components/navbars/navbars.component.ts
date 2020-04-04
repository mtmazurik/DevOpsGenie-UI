import { Component, OnInit } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../core/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavBarsComponent implements OnInit {
  navItems: any[] = [
    { path: '/registry', title: 'Registry'},
    { path: '/documents', title: 'Documents'}
  ]

  moreEllipsisItems: any[] = [
    { path: '/config' },
    { path: '/help' }
  ]

  events: string[] = [];
  opened: boolean;
  authService: AuthService;

  constructor(public auth: AuthService) { 
    this.authService = auth;
  }

  ngOnInit() {
  }

  loginClicked() {
      this.auth.login();
  }
  logoffClicked() {
      this.auth.logout();
  }
}