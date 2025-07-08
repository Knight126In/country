const countries = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    gdp: "$26.9 trillion",
    population: "331 million",
    area: "9,833,520 km²",
    density: "33.7/km²",
    politicalLeaning: "Center-Right"
  },
  {
    name: "India",
    capital: "New Delhi",
    gdp: "$3.73 trillion",
    population: "1.43 billion",
    area: "3,287,263 km²",
    density: "435/km²",
    politicalLeaning: "Right"
  },
  {
    name: "Germany",
    capital: "Berlin",
    gdp: "$4.55 trillion",
    population: "83 million",
    area: "357,022 km²",
    density: "232/km²",
    politicalLeaning: "Center-Right"
  }
  {
    name: "France",
    capital: "Paris",
    gdp: "$2.796 trillion",
    population: "66.65 million",
    area: "547,557 km²",
    density: "122/km²",
    politicalLeaning: "Center-Right"
  }
  {
    name: "UK",
    capital: "London",
    gdp: "$3.4 trillion",
    population: "67.7 million",
    area: "243,610 km²",
    density: "278/km²",
    politicalLeaning: "Center-Right"
  }
  {
    name: "Russia",
    capital: "Moscow",
    gdp: "$2.2 trillion",
    population: "143.4 million",
    area: "17m km²",
    density: "8.4/km²",
    politicalLeaning: "Auhtorotarian"
  }
  {
    name: "China",
    capital: "Beijing",
    gdp: "$17.7 trillion",
    population: "1.4 billion",
    area: "9.5m km²",
    density: "147/km²",
    politicalLeaning: "Communist"
  }
  {
    name: "Australia",
    capital: "Canberra",
    gdp: "$1.8 trillion",
    population: "26.8 million",
    area: "7.6m km²",
    density: "3.5/km²",
    politicalLeaning: "Center-Left"
  }
  {
    name: "Italy",
    capital: "Rome",
    gdp: "$2.2 trillion",
    population: "58.8 million",
    area: "301,340 km²",
    density: "195/km²",
    politicalLeaning: "Right"
  }
  {
    name: "Spain",
    capital: "Madrid",
    gdp: "$1.7 trillion",
    population: "47.5 million",
    area: "505,990 km²",
    density: "94/km²",
    politicalLeaning: "Center-Left"
  }
  {
    name: "Saudi Arabia",
    capital: "Riyadh",
    gdp: "$1.1 trillion",
    population: "36 million",
    area: "2.1m km²",
    density: "17/km²",
    politicalLeaning: "Monarchy"
  }
  {
    name: "Iran",
    capital: "Tehran",
    gdp: "$0.38 trillion",
    population: "89 million",
    area: "1.6m km²",
    density: "54/km²",
    politicalLeaning: "Theocratic"
  }
  {
    name: "Israel",
    capital: "Jerusalem",
    gdp: "$0.55 trillion",
    population: "9.8 million",
    area: "22,145 km²",
    density: "443/km²",
    politicalLeaning: "Right"
  }
  {
    name: "South Africa",
    capital: "Pretoria",
    gdp: "$0.37 trillion",
    population: "60 million",
    area: "1.2m km²",
    density: "49/km²",
    politicalLeaning: "Center-Left"
  }
  {
    name: "Brazil",
    capital: "Brasilia",
    gdp: "$2.1 trillion",
    population: "215 million",
    area: "8.5m km²",
    density: "25/km²",
    politicalLeaning: "Left"
  }
  {
    name: "Mexico",
    capital: "Mexico City",
    gdp: "$1.6trillion",
    population: "129 million",
    area: "1.9m km²",
    density: "66/km²",
    politicalLeaning: "Center-Left"
  }
  {
    name: "Indonesia",
    capital: "Jakarta",
    gdp: "$1.5 trillion",
    population: "278 million",
    area: "1.9m km²",
    density: "146/km²",
    politicalLeaning: "Center-Right"
  }
  {
    name: "Japan",
    capital: "Tokyo",
    gdp: "$4.4 trillion",
    population: "123 million",
    area: "377,975 km²",
    density: "325/km²",
    politicalLeaning: "Center-Right"
  }
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    gdp: "$0.11 trillion",
    population: "126.5 million",
    area: "1.1m km²",
    density: "114/km²",
    politicalLeaning: "Authorotarian"
  }
  {
    name: "Nigeria",
    capital: "Abuja",
    gdp: "$0.5 trillion",
    population: "227 million",
    area: "923,769 km²",
    density: "246/km²",
    politicalLeaning: "Right"
  }
  {
    name: "Thailand",
    capital: "Bangkoko",
    gdp: "$0.55 trillion",
    population: "70.6 million",
    area: "513,120 km²",
    density: "138/km²",
    politicalLeaning: "Military"
  }
  {
    name: "Bangladesh",
    capital: "Dhaka",
    gdp: "$0.47 trillion",
    population: "170 million",
    area: "147,570 km²",
    density: "1,152/km²",
    politicalLeaning: "Center-Right"
  }
  {
    name: "Pakistan",
    capital: "Islamabad",
    gdp: "$0.38 trillion",
    population: "241.5 million",
    area: "881,913 km²",
    density: "274/km²",
    politicalLeaning: "Right"
  }
  {
    name: "Egypt",
    capital: "Cairo",
    gdp: "$0.47 trillion",
    population: "111 million",
    area: "1m km²",
    density: "111/km²",
    politicalLeaning: "Authorotarian"
  }
  
  
];

const select = document.getElementById("country-select");
const detailsCard = document.getElementById("country-details");

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = country.name;
  select.appendChild(option);
});

select.addEventListener("change", function () {
  const selected = countries.find(c => c.name === this.value);
  if (selected) {
    document.getElementById("country-name").textContent = selected.name;
    document.getElementById("capital").textContent = selected.capital;
    document.getElementById("gdp").textContent = selected.gdp;
    document.getElementById("population").textContent = selected.population;
    document.getElementById("area").textContent = selected.area;
    document.getElementById("density").textContent = selected.density;
    document.getElementById("political").textContent = selected.politicalLeaning;
    detailsCard.classList.remove("hidden");
  } else {
    detailsCard.classList.add("hidden");
  }
});
