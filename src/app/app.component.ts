import { Component, OnInit } from '@angular/core';
import { UsersActionsService } from './service/users-actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'flyr-assignments';
  usersList: any = [];
  isLoading = false;

  page = 1;
  pageSize = 1;
  collectionSize = this.usersList.length;
  countries:any;

  constructor(private usersService: UsersActionsService) {
    
    this.usersList = this.usersService.getGitUsersList();
    this.collectionSize = this.usersList.length;
    this.refreshCountries()
  }

 
  refreshCountries() {
    this.isLoading= true;
    setTimeout(() => {
      this.countries = this.usersList
      .map((country: any, i: number) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      this.isLoading= false;
    }, 1500);
    
  }
  
  
  ngOnInit() {
    
  }
}
