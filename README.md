# WhatReference
WhatReference is a Express.js / Node.js / MongoDB web app designed to catalogue cultural references within media. 

## Project Description

> **Include**:<br />A library for tracking cultural references, parodies, and pop-culture in popular media.<br />
> **General App Idea/Purpose**<br /> A database for users to create pages that describe and define cultural references in modern media. It is very common for media (TV, movies, video games, etc.) to make references to older media and pop culture. WhatReference will be a database for users to catalog these references, creating a library for other users to learn and understand the context behind such references and parodies. <br />
> **Models including field names and their datatypes**<br />


> A list of routes (e.g. `POST /pins/ allows users to post a picture of a pin`)<br />

- `GET /movies/ allows users to view a list of the movies library`
- `GET /television/ and the other primary menu items allows users to view a list of the television, video game, etc. libraries`
- `GET /movies/new, /television/new, etc Shows users the form to add a new media/cultural reference to the database`
- `POST /movies/new, /television/new, etc. Adds a new media item to the database, then redirects back to main page`
- `GET /movies/:id, /television/:id, etc. Shows info about one reference from a show/movie/etc.`
- `GET /movies/:id/edit Shows users a form to edit an entry, used primarily to add cultural references to the given media item`
- `PUT /movies/:id Allows users to edit an entry`
- `DELETE /movies/:id Deletes a specific entry, then redirects home. Same for /television/:id, etc` 



## ORIGINAL Wireframes
> Wireframes with basic page layouts<br />
> Copy and paste or drag and drop your images here.

![Screen Shot 2022-08-20 at 11 46 24 AM](https://media.git.generalassemb.ly/user/43083/files/a5d13d8b-844b-4deb-a272-d008c6d785bd)

---
![Screen Shot 2022-08-20 at 11 46 31 AM](https://media.git.generalassemb.ly/user/43083/files/26672eca-3d5e-458c-9a6e-20c33c1f8f98)
---
![Screen Shot 2022-08-20 at 11 46 37 AM](https://media.git.generalassemb.ly/user/43083/files/b5919229-a58d-4fa7-b010-2c01274c1c71)
---
![Screen Shot 2022-08-20 at 11 46 43 AM](https://media.git.generalassemb.ly/user/43083/files/f9fa5932-4890-41c6-be1f-74a3bd1e56e9)
---


## User Stories
> User stories detailing app functionality<br />

As a contributor, I want to be able to add entries to the library, so that when a user wants to, for example, show what a reference in a Family Guy episode is referring to, it shows the media/pop-culture item that the show is referencing or parodying.

As a user, I want to be able to explore the library to learn about these references to older movies/tv/pop-culture. 

As a user, I want to add a show, movie, etc. to the library so that any user can add references within that media.


### MVP Goals

- As a user, I want to be able to explore the library, click on a movie or tv show that I have watched, and see what things that movie/show was referencing.
- As a contributor, I want to be able to add my knowledge of a pop-culture reference to the database
- As a contributor, I want to be able to edit entries, either to add information to them or change information.
- As a contributor, I want to be able to delete entries that may be incorrect.