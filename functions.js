const array = [1,2,3,4,5,6];

let websiteURL = "https://www.joshgotro.com"

function practiceFunction(url, firstName, lastName) {
    console.log(url);
    let userInfo = firstName + lastName
    console.log(userInfo);
};

practiceFunction(websiteURL, "Josh", "Gotro");

const appUser = {}

function addUser(first, last, username, password) {
    appUser["Name"] = first;
    appUser["Last_Name"] = last;
    appUser["sign_on"] = {"user_name": username, "password": password};
};

addUser("Jon", "Borden", "Bordo", "1234");

console.log(appUser);