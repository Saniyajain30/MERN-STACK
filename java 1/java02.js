
const numbers = [1,2,3,4,5,6];
const double = numbers.map(item => item*2);
console.log(double);

class Profile{}

let user1 = new Profile("saniya","saniyajain312@gmail.com","19");
let user2 = new Profile("pankaj","pankaj2771@gmail.com","25");


class Admin extends Profile{
      deleteUser(user){
            users = users.filter(u => user.email !== u.email);
      }
      findUser(user){
            users = users.find(u => user.email !==u.email);
      }
}

console.log(user1 instanceof Profile);
console.log(user2 instanceof Profile);

