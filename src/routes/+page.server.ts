//from 'fetch is not a function result lol' 

//in this example because it's a public api you don't need to import any private env keys like in my pages that need an import for my private api key from hygraph cms

//+page.server.ts does not take in the fetch method from sveltekit, this uses normal node fetch (this is unlike the page.js file of which we didn't use in this site)
export async function load({ data }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();
    //console.log(users)

    return {
        age: 8,
        users: users
        //you can do it like above or just say users instead of users: users like i have it here
    }


}

//from loading data in sveltekit video 3:51 mins in
/*export const load = async ({ fetch }) => {
    return {
        product: 'iphone 14'
    }
}  */







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