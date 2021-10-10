import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitRepoDetailsComponent } from './git-repo-details.component';

describe('GitRepoDetailsComponent', () => {
  let component: GitRepoDetailsComponent;
  let fixture: ComponentFixture<GitRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitRepoDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as details '[]'`, () => {
    const fixture = TestBed.createComponent(GitRepoDetailsComponent);
    const app = fixture.componentInstance;
    expect(app.details).toEqual([]);
  });
});
