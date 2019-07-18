import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) { }
  urlBase = 'https://api.github.com';
  
  getRepos(user) {
    const uri = `${this.urlBase}/users/${user}/repos`;
    return this.http.get(uri);
  }
}
