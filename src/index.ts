import User, { createUser } from "./entities/user"
import Web from "./entities/web";
import { createDateDayList, pickTimeInDay } from "./utils/date";
import { loop } from "./utils/loop";
import { randomPick } from "./utils/random";

// create 10 website
const webs: Web[] = [];
loop(10, () => {

})
// save webs to a json file

const users: User[] = [];
loop(1000, () => {
  const user = createUser()
  users.push(user)
})

// save users to a json file

// create user register
const dates = createDateDayList('2024-01-01', '2024-12-31')

const events = [];

users.forEach(user=> {
  // user pick day do something
  const date = randomPick(dates);
  // pick time in a day
  const time = pickTimeInDay(date)
  // 
  user.time = time;
  // user pick a app

  // state machine
  // do something

})

// store user state

