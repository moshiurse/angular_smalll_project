import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private client_id = 'cdf274a2ba993541461d';
  private client_secret = '7e7e4d238a85ba22c3c02b002a7477d6efecf68f';


  constructor(private http: HttpClient) {
    this.username = 'moshiurse';
  }

  getUser() {
    return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  getRepos() {
    return this.http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  }

  updateUser(username: string) {
    this.username = username;
  }

}
