import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'profile',
  templateUrl: 'app/components/profile/profile.component.html',
})
export class ProfileComponent {
  user;
  repos = [];
  username:string;

  constructor (private githubService: GithubService ) {
    this.user = false;
    // this.githubService
    // .getUser()
    // .subscribe( user => {
    //   // console.log(user);
    //   this.user = user;
    // });
    //
    // this.githubService
    // .getRepos()
    // .subscribe( repos => {
    //   // console.log(repos);
    //   this.repos = repos;
    // });
  }

  searchUser(){
    // console.log('it work');
    this.githubService.updateUser(this.username);

    this.githubService
    .getUser()
    .subscribe( user => {
      // console.log(user);
      this.user = user;
    });

    this.githubService
    .getRepos()
    .subscribe( repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }
}
