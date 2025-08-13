let people = [
    { name: "Alice", age: 17, city: "Mumbai" },
    { name: "Bob", age: 22, city: "Delhi" },
    { name: "Christine", age: 19, city: "Chennai" },
    { name: "David", age: 15, city: "Kolkata" },
    { name: "Eva", age: 30, city: "Hyderabad" }
];

let updatedPeople = people.map(p => {
    let status;
    if (p.age >= 18) {
        status = "Adult";
    } else {
        status = "Minor";
    }
    return { name: p.name, age: p.age, city: p.city, status: status };
});

console.log("Updated People List:", updatedPeople);
