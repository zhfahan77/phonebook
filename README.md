# Phonebook

Phonebook REST App Backend

### Pre Requisites

---

- Node.JS
- MongoDB (Make sure MongoDB is running and 27107 port is exposed)
- Docker (optional)
- Docker Compose (optional)

### Setup Instructions

---

#### Using Locally Installed NodeJS and MongoDB
`Create a .env file in root of the project with the contents of the .env.sample file.`

`or Shortcut command`

```sh
$ npm run init
```

`For Help (To see available commands)`

```sh
$ npm run
```

`Install Dependencies`

```sh
$ npm install
```


`Start the application...`

```sh
$ npm start
```

`Stop the application ...`

```sh
$ ctrl + c
```

`or in mac`

```sh
$ control + c
```

---
### Docker Compose

#### - Using Docker and Docker Compose
#### - Make sure you have docker and docker-compose installed

`Start Container`

```sh
$ npm run start:docker
```

`Stop Container`

```sh
$ npm run stop:docker
```

`Remove Everything`

```sh
$ npm run clean:docker
```
---

### Run Tests

#### Unit Tests (Functional Unit Test; Testing Core Component)

```sh
$ npm test
```