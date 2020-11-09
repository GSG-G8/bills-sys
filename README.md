# Bills System :

Solution for collecting bills (electricity, water, communications, and telephones, etc) and providing insight on your consumption pattern(something like a chart) comparing you with similar households/individuals and helping you reduce consumption.

## Live Demo :

[Heroku link , Click here to visit our app](https://gsg-bills-sys.herokuapp.com/home)
use these credientials:
email: Conrad_Rosenbaum38@gmail.com
password: 123456

### Team Lead:

- Imad Shatali

### Team Members:

- Abeer Karam
- Ahmad Safi
- Mohammed Irheem
- Rehab Al-Shawaf

### Problem:

It is hard for anyone to track and manage their bills. Also, we don't know if our consumption is over normal or not.

### Solution:

we want to create a website to manage and track your bills and show you a comparison between your bills with other people's bills who are from the same category. Also, we will show you some tips to reduce your consumption when you are over normal.

#### [Our Prototype](https://www.figma.com/file/lqenmDSPgTt61yGa0Dc6NX/bills?node-id=96%3A0)

## Installation Guide :

1. Clone this repo.
2. Navigate to the cloned repo.

### Database Setup

1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Along side with pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to this path: `./server/src/config/createdb.sql`

3. Copy this file path and write in the terminal:

```
    \i <paste your copied path to the file>
```

4. build the dummy data by using this command:

```
    npm run build:db
```

### Project setup

1. Create a `.env` file in the project root folder.
2. Add the following in it **This step is so important!!**

```
    DATABASE_URL= postgres://billssys:123@localhost:5432/billssys

    DATABASE_TEST_URL=postgres://billssys:123@localhost:5432/billssys

    SECRET_KEY = ABCDE12345
```

3. To install the dependencies, run this command only for the first time:

```
    npm i
```

### Running the project:

1. To run the server, Open your terminal and run:

```
    npm run server
```

2. To run the React Development server, Open another terminal and run:

```
    npm run client
```

3. To run the tests:

```
    npm test
```

### Data-Base Schema:

This is the schema of our database
![schema](https://user-images.githubusercontent.com/56350350/87008787-ef453200-c1cc-11ea-97d5-f32b9c401843.png)

### User Stories:

- As a user, I can see all my bills.
- As a user, I can see my old bills.
- As a user, I can see a comparison other people from the same category during this month.
- As a user, I can switch between Arabic and English
- As a user, I can see some tips to reduce my consumptions.

## Technologies:

#### Front-end Technology:

- ReactJS (Hooks).
- Tailwind.
- i18next.
- chartJS

#### Back-end Technology:

- Express.
- sequelize.

## Challenges Achieved:

- create huge amount of dummy data.
- using new technologies like sequelize, localization, chartJS and tailwind.
- making a user testing and get real users feedback.

## Resources

https://reactjs.org/docs/getting-started.html

https://expressjs.com

https://www.npmjs.com/package/jsonwebtoken

https://www.npmjs.com/package/bcrypt

https://sequelize.org/master/

https://react.i18next.com/

https://tailwindcss.com/
