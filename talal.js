arr = [{ company: "Honda", model: "2022 Insgiht", price: "$26,78", milage: 46, seats: "cloth", power: "141hp" },
{ company: "Honda", model: "2021 Civic Sedan", price: "$40,28", milage: 40, seats: "leaher", power: "180hp" },
{ company: "Honda", model: "2022 CR-V", price: "$30", milage: 37, seats: "cloth", power: "160hp" },
{ company: "Lamborghini", model: "Countach", price: "$80,78", milage: 60, seats: "leather", power: "200hp" },
{ company: "Lamborghini", model: "400GT", price: "$90,78", milage: 67, seats: "leather", power: "220hp" },
{ company: "Lamborghini", model: "Urus", price: "$100,78", milage: 80, seats: "leather", power: "300hp" },
{ company: "Tesla", model: "Model S", price: "$130,78", milage: 49, seats: "leather", power: "160hp" },
{ company: "Tesla", model: "Model 3", price: "$126,78", milage: 60, seats: "leather", power: "200hp" },
{ company: "Tesla", model: "Model X", price: "$110,78", milage: 48, seats: "leather", power: "180hp" },
{ company: "Toyota", model: "Pirus", price: "$40,78", milage: 40, seats: "leather", power: "180hp" },
{ company: "Toyota", model: "Yaris", price: "$38,78", milage: 60, seats: "cloth", power: "200hp" },
{ company: "Toyota", model: "Corolla", price: "$29,78", milage: 70, seats: "cloth", power: "220hp" }]


let x = arr.map(function (e) {
    return (e.company);
})

a = [...new Set(x)];
a.map(function (e, i) {
    document.getElementById("carCompany").innerHTML += `<option value="${e}">${e}</option>`;
})

function xyz() {
    let z = document.getElementById("carCompany").value;
    document.getElementById("models").innerHTML = ""
    document.getElementById("models").disabled = false;
    arr.filter(function (e) {
        if (e.company == z) {
            document.getElementById("models").innerHTML += `<option value="${e.model}">${e.model}</option>`;
        }
    })
}

function search() {
    let a = document.getElementById("carCompany").value;
    let b = document.getElementById("models").value;
    arr.filter(function (e) {
        if (e.company == a && e.model == b) {
            document.getElementById("spec").innerHTML = "Specifications";
            document.getElementById("comp").innerHTML = "Company Name";
            document.getElementById("Name").innerHTML = a;
            document.getElementById("mod").innerHTML = "Model";
            document.getElementById("Model").innerHTML = b;
            document.getElementById("pow").innerHTML = "Horse Power";
            document.getElementById("power").innerHTML = e.power;
            document.getElementById("mil").innerHTML = "Milage";
            document.getElementById("milage").innerHTML = e.milage;
            document.getElementById("sea").innerHTML = "Seats";
            document.getElementById("seats").innerHTML = e.seats;
            document.getElementById("pri").innerHTML = "Price";
            document.getElementById("price").innerHTML = e.price;

        }
    })
}