![](https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/480552_785810381524251_2867792172390942560_n.png?_nc_cat=105&_nc_sid=85a577&_nc_ohc=kr8NJkDVXn0AX8zIvlX&_nc_ht=scontent.flhr4-1.fna&oh=ab97b1c3c6de87575f742f872674e801&oe=5F58B3CC)

## Cobalt Table Manager

---

## Introduction

This project is a React app with Redux state management that uses a Ruby on Rails back end. This app is my first attempt at building a full API and front end to handle a user experience end to end. The use case of this application is to help a diner make a booking at a restaurant with an easy to use UI and intuitive confirmations for the reservation.

I would like to expand on this to have a variety of different features which will allow me to better understand the data flow between a front end and back end and how each informs the other.

## Running the project

To start the project, you need to start the API via Rails and the front end via NPM.

Once the repo is cloned, cd into:

### CobaltAPI for the Rails API and run the command

```bash
$ rails server
```
The default port for the API is 3001

### Cobalt-tbl-manager for the React front end and run the command

```bash
$ npm start
```
The default port for the front end is 3000

If running this locally, pleae ensure you have a .env file in the cobaltAPI directory with vars for use with Twilio.
If this isn't present, there may be errors while submiting the booking. Please see the SMS controller to understand what vars
are required. If more guidance is needed, please check Twilio's quickstart documentation.


## Future updates

* Implement triggers and updates for SQL in back end
* Implement different booking views for owners and diners
* Expand SMS integration to allow for SMS booking
