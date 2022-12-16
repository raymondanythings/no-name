interface IUser {
  id : number;
  name : string;
  age : number;
  gender : 'Male' | "Female"
}


const userList:IUser[] = [
  {
    id : 1,
    name : "John",
    age : 20,
    gender : "Male"
  },
  {
    id : 2,
    name : "Doe",
    age : 22,
    gender : "Male"
  },
  {
    id : 3,
    name : "Jane",
    age : 18,
    gender : "Female"
  },
  {
    id : 4,
    name : "Peter",
    age : 20,
    gender : "Male"
  },
]

type getUser = (user:IUser) => string


const getUserName : getUser = (user) => user.name


export {}