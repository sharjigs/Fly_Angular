import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-repo-list',
  templateUrl: './git-repo-list.component.html',
  styleUrls: ['./git-repo-list.component.scss'],
})
export class GitRepoListComponent implements OnInit {
  @Input() containers: any = [];
  @Input() demo: any = [];
  page = 1;
  pageSize = 4;
  collectionSize = this.containers.length;
  countries: any;

  constructor() {}

  ngOnInit(): void {
    this.collectionSize = this.containers.length;
    this.refreshCountries();
  }

  refreshCountries() {
    this.countries = this.containers
      .map((country: any, i: number) => ({ id: i + 1, ...country }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
