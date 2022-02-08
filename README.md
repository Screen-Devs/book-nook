![Book-Nook Banner](./client/src/images/bookBannerLight.png)

# ![Book-Nook Icon](./client/src/images/bnLogoSmall.png) Book-Nook

## Table of Contents

1. [General Info](#general-info)
2. [Demo](#demo)
3. [API Services](#api-services)
4. [Technologies Used](#technologies-used)
5. [Contributors](#contributors)
---
## General Info
This application was created to cultivate a place where users could catalog and converge over books. The application will allow users to develop shared-interst communities, communicate with fellow book lovers, and discover new books.

**Login/Signup Authentication**
* Login Page
* Signup Page
* This application uses session based tokens to authenticate users and persist their session.

**User Profile**
* Friend's list
* Allow your friends to leave a comment on your page
* User-specific Lists to organize your reading
  * Statistics to show each category
  * Book Clubs
  * Current Books
  * Book Queue
  * Completed Books
  * Ability to navigate to a book details page from the lists
* Leaderboard for Most Readers and in most Book Clubs
* Suggested Books
* Highest Rated Books
* NYT Best Sellers

**Search Page**
* Renders a list of books using Google Books API
* Filter capabilities by Author, Genre, and Publisher
* Ability to navigate to a book details page from the search list

**Book Details**
* Renders book details such as Title, Authors, Published Date, and Book Cover
* Ability to add reviews
  * Ability to mark reviews helpful
  * Ability to report reviews
* Ability to leave a comment on a review
  * Ability to mark a comment helpful
  * Ability to report a comment
---
## Demo
Click to watch the live demo of Book Nook:
[![Book Nook demo](./resources/bnthumb.png)](https://www.youtube.com/watch?v=h0llB4F2Fs8 "Book Nook Live Demo")

### User Profile
![User profile demo gif](./resources/userprofile.gif)

### Friend Interactions
![Friends demo gif](./resources/friends.gif)


### Search Page & Book Details
![Search and Book detail demo gi](./resources/booksearch.gif)


---
## API Services

## Authentication
### **GET /authenticate**
Check if a user is authenticated with their session token

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| session | session-token | session-token saved in the browser on a successful login | required |

Example:

`/authenticate`

```json
{
  isAuthenticated: true,
  username: "aneroB",
}

Response: 200 OK
```
### **POST /authenticate/login**
Create a session token by logging in with correct credentials

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | username the user signed up with | required |
| password | string | password the user signed up with | required |

Example:

`/authenticate/login` - Request body:

```json
{
  username: "aneroC",
  password: "123",
}
Response: 201 OK
```

### **POST /authenticate/logout**
Will invalidate the session token sent with the request

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| session | session-token | session-token to be destroyed on logout | required |

Example:

`/authenticate/logout`

- No request body
### **POST /authenticate/signup**
Create a user with the credentials provided. Passwords will be hashed before being saved.

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | username to sign up with | required |
| password | string | password to sign up with | required |

Example:

`/authenticate/signup` - Request body:

```json
{
  username: "aneroC",
  password: "123",
}
Response: 201 OK
```

## Users
### **GET /users**

Get all data for a specified user.

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | the desired user profile | required |

Example:

`/users?username=aneroB`

```json
[
  {
    _id: ObjectId("61f86952932001460b7431a5"),
    username: 'aneroB',
    userBooks: [
      {
        gBookId: '1289713',
        title: 'Hamlet',
        authors: [ 'William Shakespeare' ],
        clubbed: { status: true, date: '2022-01-31T22:58:31.531Z' },
        current: { status: false, date: null },
        past: { status: false, date: null },
        queued: { status: false, date: null },
        _id: ObjectId("61f8699771cea99199ec610a")
      }
    ],
    friends: [ 'aFriend', 'anotherFriend' ],
    canvas: [
      {
        message: 'Posting on your wall!',
        commenter: 'dewey',
        date: 2021-02-22T05:33:30.792Z,
      }
    ],
    settings: { theme: 'light' },
    createdAt: ISODate("2022-01-31T22:57:22.031Z"),
    updatedAt: ISODate("2022-01-31T22:58:31.566Z"),
    __v: 0
  }
]

Response: 200 OK
```


---

### **PUT /users/books**

Add a book to a user’s specified book list.

| Request Body Property | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | the desired user to update | required |
| gBookId | string | the Google API book ID string. For example: the property id in response body of a request to https://www.googleapis.com/books/v1/volumes?q=hamlet OR the ID in the uri of a specific request to https://www.googleapis.com/books/v1/volumes/I8mezgEACAAJ (I8mezgEACAAJ is the id) | required |
| title | string | the title of the book to add or update | required |
| author | array | the author(s) of the book to add or update | required |
| list | string | the list to update: clubbed, current, past, or queued |  |
| status | boolean | true to represent adding the specified book to the specified list, or false to represent removing it |  |

Example: Add Hamlet to user Sunny’s Book Club list

- `/users/books` Request body:

```json
{
  username: 'sunny',
  gBookId: 'I8mezgEACAAJ',
  title: 'Hamlet',
  authors: [ 'William Shakespeare' ],
  list: clubbed,
  status: true
}

Response: 204 OK
```


---

### **PUT /users/friends**

Add or remove a friend from the specified user’s friends list.

| Request Body Property | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | the username of the desired user to update | required |
| friend | string | the username of the friend to add or remove | required |
| action | string | the desired action, either add or remove | required |

Example: Add the user ‘Bryan’ to user ‘Andrew’ ‘s friends:

- `/users/friends` Request body:

```json
{
  username: 'Bryan',
  friend: 'Andrew',
  action: 'add'
}

Response: 204 OK
```


### **POST /users/canvas**

Add a message to a specified user’s page.

| Request Body Property | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | the username of the user to post to | required |
| message | string | a message text string | required |
| commenter | string | the username of the user commenting | required |

Example: Add a post to user ‘anero’s page from user ‘allyamber’:

- `/users/canvas` Request body:

```json
{
  username: 'anero',
  message: 'I'm commenting on your page!',
  commenter: 'allyamber'
}

Response: 201 OK
```


### **GET /users/leaderboards**

Get leaderboard data for a specified user.

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | the target user to build leaderboard data from | required |

Example:

`/users/leaderboards?username=aneroC`

```json
[
    {
        "friend": "Salvador3",
        "clubbedCount": 1,
        "completedCount": 5
    },
    {
        "friend": "Dariana.Schowalter72",
        "clubbedCount": 3,
        "completedCount": 6
    },
    {
        "friend": "Arnoldo_Kilback40",
        "clubbedCount": 2,
        "completedCount": 2
    },
    {
        "friend": "Margarett.Lehner52",
        "clubbedCount": 1,
        "completedCount": 3
    },
    {
        "friend": "Salvatore.Sporer",
        "clubbedCount": 2,
        "completedCount": 3
    }
]

Response: 200 OK
```


### **GET /users/suggested**

Get a list of recommended books for a specific user.

| Parameter | Type | Description | Notes |
| --- | --- | --- | --- |
| username | string | the target user to build suggested books for | required |

Example:

`/users/suggested?username=aneroC`

```json
// PLEASE NOTE: gBookId MAY BE NULL - when search defaults
//   to using NYT Best Selling List there is NO gBookId!

[
  {
      gBookId: "Jbv0Gfdiq8gC",
      title: "The Poems and Sonnets of William Shakespeare",
      authors: [
          "William Shakespeare"
      ],
      description: "The sonnets in this collection divide into two parts; the first 126 are addressed to a fair youth for whom the poet has an obsessive love and the second chronicles his love for the notorious \"Dark Lady\". In addition to the sonnets, this volume includes two lengthy poems on classical themes.",
      imageUrl: "http://books.google.com/books/content?id=Jbv0Gfdiq8gC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
  {
      gBookId: "miSeN4lkDbsC",
      title: "William Shakespeare",
      authors: [
          "William Baker"
      ],
      description: "A concise, accessible introduction to Shakespeare's life and work which focuses on what we know, assessing the differing theories and avoiding speculation.",
      imageUrl: "http://books.google.com/books/content?id=miSeN4lkDbsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    },
  ...
]

Response: 200 OK
```
## Books

### **GET /books**

### **GET /books/highestAvgRating**

### **POST /books/meta**

### **POST /books/reviews**

### **POST /books/reviews/comments**

### **PUT /books/reviews**

### **PUT /books/reviews/comments**

## External API(s)

### **GET /search**

### **GET /nytimeslist**

### **GET /nytimeslist/list**

## Technologies Used

Please note that below is a list of all major dependencies used in the project. There could be various adapters and minor dependencies needed. Please ensure to install the necesary modules with NPM.

* React v16.8.0
* React-Router v6.2.1
* Express v4.17
* Axios v0.25
* Material-UI v4.12
* Animate CSS v4.1.
* Styled-Components v5.3.3

## Contributors
* S. Beddow | [LinkedIn](https://www.linkedin.com/in/samuel-r-r-beddow/) | [GitHub](https://github.com/beddo018)
* A. Carnero | [LinkedIn](https://www.linkedin.com/in/andrew-carnero/) | [GitHub](https://github.com/anerolabs)
* H. Harper | [LinkedIn](https://www.linkedin.com/in/haydenn-harper/) | [GitHub](https://github.com/haydennharper)
* B. Ramirez | [LinkedIn](https://www.linkedin.com/in/brynrmrz/) | [GitHub](https://github.com/brynrmrzz)
* M. Raquepo | [LinkedIn](https://www.linkedin.com/in/matthew-raquepo/) | [GitHub](https://github.com/maraquepo)
* K. Sheng | [LinkedIn](https://www.linkedin.com/in/kevin-c-sheng/) | [GitHub](https://github.com/ks10825n)
