# Project Name

## Description

This is a platform for teachers to make their job easier. The website has create a easy access path for teachers to find and share teaching ideas. 

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start to access the website
-  **Login:** As a user I can login to the platform so that I can see all the information
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Plan** As a user I can add an idea so that I can share it with the community
-  **Delete Plan** As a user I can delete an idea so no one can see it again
-  **List Plan** As a user I want to see all lesson plans so that I can choose one to see
most
-  **Create Your Lesson Plan** As a user I choose the idea I like in to a Lesson Plan

## Backlog

User profile:
- see my profile
- upload my profile picture
- see other users profile


<!-- Geo Location:
- add geolocation to events when creating
- show event in a map in event detail page
- show all events in a map in the event list page

Homepage:
- ... -->
  
# Client

## Routes
| Method | Path | Component | Permissions | Behavior | 
|--------|------|--------|--| -------|
| `get`  | `/` | HomePageComponent| Signup Login button |
| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to homepage after signup|
| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |
| `post` | `/auth/logout` | n/a| anon only | navigate to homepage after logout, expire session |
| `get`  | `/topics` | ViewComponent| public | shows all topics, links to details
| `get`  | `/topics/:topic` | ViewComponent| public | shows all topics related to topic, links to details
| `get`  | `/topic/:id` | ViewComponent| public | shows all topics, links to details
| `post` | `/topic/new` | CreateViewComponent | user only | creates a new topic, navigates to topic's created by me
| `get` | `**` | NotFoundPageComponent | public | 




## Components

- Page component
  - Home: signup, login button
  - NavBar: Login, Logout, View All, Myprofile, Plan+
  - Signup: Username, Password, submit button
  - Login: Username, Password, submit button
  - All Topics: Reading, Writing, Festival, warm up activities, HSK, Tool Book
  - My Profile(Private): Username, Location, Share idea(Topic, description, duration, img),submit button
- Plan component
  - Topic: (display items)
  - Item: img, description, duration
  - Form - inputs
 



## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous


- Plan Service
  - plan.getAll()
  - plan.addOne(body)
  - plan.getOne(id)
  - plan.edit(id, body)
  - plan.delete(id)

# Server

## Models

User model

username - String // required // unique
password - String // required
location - String
plans - [{Object.id: plans}]

Plan model

Topic - String // required
Description - String // required
Duration - String // required
Image - String // required
```

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204

- GET /topics
  - check if logged in 
 - 200 with user object

 - GET /topics:topic
   - body:
    - topic
    - 200 with topic objects

   - GET /topics:id
   - body:
    - id
    - Topic 
    - Description 
    -Duration 
    -Image 
    - 200 with topic object

- POST /topic/new
  - body:
    - Topic 
    - Description 
    -Duration 
    -Image 
  - validation
    - fields cant be empty(422)

- DELETE /topic/id
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from topic collection
  - updates user in session

  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)