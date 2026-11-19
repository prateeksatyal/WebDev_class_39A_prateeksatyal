// Q4: Login & Role Check
const isLoggedIn = true;
const role = "admin";
if (!isLoggedIn) {
    console.log("Please log in");
} else if (role === "admin") {
    console.log("Welcome, Admin");
} else {
    console.log("Welcome, User");
}
