const appUser = {}

function addUser(first, last, username, password) {
    appUser["Name"] = first;
    appUser["Last_Name"] = last;
    appUser["sign_on"] = { "user_name": username, "password": password }
}

addUser("Jon", "Bordon", "Bordo", "1234")

console.log(appUser)