import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepoListComponent } from './git-repo-list.component';

describe('GitRepoListComponent', () => {
  let component: GitRepoListComponent;
  let fixture: ComponentFixture<GitRepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitRepoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as containers '[]'`, () => {
    const fixture = TestBed.createComponent(GitRepoListComponent);
    const app = fixture.componentInstance;
    expect(app.containers).toEqual([]);
  });
});
