const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
    let bill = Number(billInput.value);

    const tipPercentage = Number(tipInput.value) / 100;
    const tipAmount = bill * tipPercentage;
    const total = tipAmount + bill;

    // calculate the per person total (total divided by number of people)

    const perPersonTotal = total / numberOfPeople;

    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
    numberOfPeople += 1;
    numberOfPeopleDiv.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople;

    if (numberOfPeople <= 1) {
        alert("Hey! You cannot have less than 1 person!");
        return;
    }
    // calculate the bill based on the new number of people
    calculateBill();
};
