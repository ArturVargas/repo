import { Component, OnInit } from '@angular/core';
import { GitService } from '../../services/git.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor(private gitSvc: GitService) { }

  ngOnInit() {
  }

  searchUserRepos(user) {
    console.log(user.value);
    this.gitSvc.getRepos(user.value)
      .subscribe(data => {
        console.log(data)
      }, (err) => {
        console.error('Ocurrio un error');
      })
  }

}
