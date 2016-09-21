import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'c4f1b4db0badb953555c';
  private client_secret = '90e11687e8a1a59fa176d80a983a9296bb93f291';

  constructor(private http:Http) {
    console.log("Github Service Ready...")
    this.username = "hiepxanh";
  };
  getUser() {
    return this.http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }
  getRepos() {
    return this.http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }
  updateUser(username:string){
    this.username = username;
  }
}
