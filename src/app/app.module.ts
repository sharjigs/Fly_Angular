import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GitRepoDetailsComponent } from './components/git-repo-details/git-repo-details.component';
import { GitRepoListComponent } from './components/git-repo-list/git-repo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersActionsService } from './service/users-actions.service';

@NgModule({
  declarations: [AppComponent, GitRepoDetailsComponent, GitRepoListComponent],
  imports: [BrowserModule, NgbModule],
  providers: [UsersActionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
