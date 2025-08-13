// Array of persons: name, age, and city
let persons = [
    { name: "John", age: 25, city: "New York" },
    { name: "Chaitanya", age: 17, city: "Delhi" },
    { name: "Jyooo", age: 30, city: "London" },
    { name: "Anita", age: 16, city: "Mumbai" },
    { name: "Siri", age: 18, city: "Sydney" }
];

// Filter out people eligible to vote (18 or older)
let eligibleVoters = persons.filter(function(person) {
    return person.age >= 18;
});

// Print results
console.log("All Persons:", persons);
console.log("Eligible Voters:", eligibleVoters);