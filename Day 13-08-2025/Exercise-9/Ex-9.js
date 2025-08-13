let people = [
    { name: "Alice", age: 17, city: "Mumbai" },
    { name: "Bob", age: 22, city: "Delhi" },
    { name: "Christine", age: 19, city: "Chennai" },
    { name: "David", age: 15, city: "Kolkata" },
    { name: "Eva", age: 30, city: "Hyderabad" }
];

for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        people[i].status = "Adult";
    } else {
        people[i].status = "Minor";
    }
}

console.log("Updated People List:", people);
