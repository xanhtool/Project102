import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'profile',
  templateUrl: 'app/components/profile/profile.component.html',
})
export class ProfileComponent {
  constructor (private githubService: GithubService ) {
    this.githubService
    .getUser()
    .subscribe( user => {
      console.log(user);
    });
  }
}
