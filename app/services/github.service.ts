import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  constructor(private http:Http) {
    console.log("Github Service Ready...")
    this.username = "hiepxanh";
  };
  getUser() {
    return this.http.get('http://api.github.com/users/'+this.username)
    .map(res => res.json());
  }

}
