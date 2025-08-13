let cities = ["Mumbai", "Delhi", "Kolkata", "Bangalore", "Chennai", "Pune", "Hyderabad", "Ahmedabad"];

let btn = document.getElementById("loadCitiesBtn");
let dropdown = document.getElementById("cityDropdown");

btn.addEventListener("click", function () {
    dropdown.length = 1; 

    let sortedCities = cities.slice().sort();

    sortedCities.forEach(function (city) {
        let option = document.createElement("option");
        option.text = city;
        option.value = city;
        dropdown.add(option);
    });

    btn.disabled = true;
    btn.textContent = "Cities Loaded";
});