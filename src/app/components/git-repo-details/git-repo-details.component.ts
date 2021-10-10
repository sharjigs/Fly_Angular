import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-repo-details',
  templateUrl: './git-repo-details.component.html',
  styleUrls: ['./git-repo-details.component.scss']
})
export class GitRepoDetailsComponent implements OnInit {

  @Input() details: any = [];
  ngOnInit(): void {}

}
