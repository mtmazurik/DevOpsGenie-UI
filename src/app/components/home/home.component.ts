import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
//
// Home component is going to be a documents window, list & query, for viewing MongoDB documents metadata (initially), CRUD later
//
export class HomeComponent {
    constructor(public authSvc:AuthService, public notify:NotificationService) { }
    ngOnInit(): void {
    }
}