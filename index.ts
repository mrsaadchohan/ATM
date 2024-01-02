import inquirer from "inquirer";
import { Faker, faker } from "@faker-js/faker";

interface User {
  id: number;
  pin: number;
  name: string;
  accountNumber: number;
  balance: number;
}

const createUser = () => {
  let users: User[] = [];
  for (let i = 0; i < 5; i++) {
    let user: User = {
      id: i,
      pin: 1000 + i,
      name: faker.person.fullName(),
      accountNumber: Math.floor(Math.random()*1000),
      balance: 10000 * i,
    };
    users.push(user);
  }
  return users;
};

const atm = async (users: User[]) => {
  let ans = await inquirer.prompt({
    type: "number",
    message: "Enter Pin",
    name: "pin",
  });

  const user = users.find((val) => val.pin === ans.pin);
  if (user) {
    console.log(`Welcome ${user.name}`);
    atmfunction(user);
  } else {
    console.log("Invalid Pin");
  }
};

const atmfunction = async (users: User) => {
  const annn = await inquirer.prompt({
    type: "list",
    name: "select",
    choices: ["Withdraw", "Balance",  "Exit"],
    message: "What do you want to do",
  });

  if (annn.select === "Withdraw") {
    const amount = await inquirer.prompt({
      type: "number",
      message: "enter amount",
      name: "rupee",
    });

    if (amount.rupee > users.balance) {
      return console.log("Balance is not much as you have entered");
    }
    console.log(`withdraw amount is ${amount.rupee}`);
    console.log(`Balance is ${ users.balance-amount.rupee}`);
  }


  if(annn.select==="Balance")
  {
    console.log(`Balance is ${users.balance}`);
    return;
  }


  if(annn.select==="Exit")
  {
    console.log("Thank You for using Atm");
  }
  console.log(annn);
};

const users = createUser();
atm(users);

// console.log(users);
