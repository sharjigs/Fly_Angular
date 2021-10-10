import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersActionsService {

  usersList: any[] =  [
    {
        "firstName": "John",
        "lastName": "Doe",
        "imgs": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            },
            {
                "name": "Repo 5 Jigs",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 6 Jigs",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 7 Jigs",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 8 Jigs",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
        ]
    },
    {
        "firstName": "Jignesh",
        "lastName": "Sharma",
        "imgs": "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/jignesh_sharma",
        "repository": [
            {
                "name": "Repo 1 Jigs",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2 Jigs",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3 Jigs",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4 Jigs",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "Poonam",
        "lastName": "Parekh",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/pooname_parekh",
        "repository": [
            {
                "name": "Repo 1 Poo",
                "description": "Repo 1 description is here ",
                "topics": ["Angular", "JavaScript", "React"]
            },
            {
                "name": "Repo 2 Poo",
                "description": "Repo 2 description is here ",
                "topics": ["MSSQL", "Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3 Poo",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django", "JS"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
            },
            {
              "name": "Repo 5",
              "description": "Repo 5 description is here ",
              "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
          },
          {
            "name": "Repo 6",
            "description": "Repo 6 description is here ",
            "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
        }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            },
            {
              "name": "Repo 5",
              "description": "Repo 5 description is here ",
              "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
          },
          {
            "name": "Repo 6",
            "description": "Repo 6 description is here ",
            "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
        }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            },
            {
              "name": "Repo 5",
              "description": "Repo 5 description is here ",
              "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
          },
          {
            "name": "Repo 6",
            "description": "Repo 6 description is here ",
            "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
        }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            },
            {
              "name": "Repo 5",
              "description": "Repo 5 description is here ",
              "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
          },
          {
            "name": "Repo 6",
            "description": "Repo 6 description is here ",
            "topics": ["PHP", "DOT Net Core", "React", "REACT NATIVE"]
        }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
    {
        "firstName": "John",
        "lastName": "Doe",
        "bio": "Bio Goes heres",
        "location": "India",
        "externalLinks": "https://twitter.com/jigs",
        "gitHubLink": "https:github.com/john_doe",
        "repository": [
            {
                "name": "Repo 1",
                "description": "Repo 1 description is here ",
                "topics": ["JavaScript", "Angular", "React"]
            },
            {
                "name": "Repo 2",
                "description": "Repo 2 description is here ",
                "topics": ["Java", "HTML", "CSS"]
            },
            {
                "name": "Repo 3",
                "description": "Repo 3 description is here ",
                "topics": ["Python", "HTML 5", "Django"]
            },
            {
                "name": "Repo 4",
                "description": "Repo 4 description is here ",
                "topics": ["PHP", "DOT Net Core", "React"]
            }
        ]
    },
  
  ]
  constructor() { }

  getGitUsersList () {
    return this.usersList;
  }
}
