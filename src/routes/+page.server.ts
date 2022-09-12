//from 'fetch is not a function result lol' 
export async function load({ data }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();
    //console.log(users)

    return {
        age: 8,
        users: users
    }


}
//getUsers();
/* how I had it at first when it would return users in console:
async function getUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await data.json();
    console.log(users)

    return {
        age: 8,
        users: users
    }


}
//getUsers();

*/

// below is how the guy in video had it
/* export async function load( {data, fetch}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const users = await response.json();
    return {
        age: 8,
        users: users
    }
} */