console.log("WELCOME TO THE CARNIVAL GIFT SHOP!\n" +
    "Hello friend! Thank you for visiting the carnival!\n" +
    "Here's the list of gifts:")
console.log("")
const gifts = [
    {id: 1,
        name:"Teddy Bear",
        cost : 10},
    {id: 2,
        name: "Big Red Ball",
        cost: 5},
    {id: 3,
        name: "Huge Bear",
        cost:50},
    {id: 4,
        name: "Candy",
        cost: 8 },
    {id: 5,
        name: "Stuffed Tiger",
        cost : 15},
    {id: 6,
        name: "Stuffed Dragon",
        cost:30},
    {id: 7,
        name:"Skateboard",
        cost: 100},
    {id: 8,
        name: "Toy Car",
        cost: 25},
    {id: 9,
        name: "Basketball",
        cost: 20},
    {id: 10,
        name: "Scary Mask",
        cost: 75}
]

gifts.forEach(function(value){
    console.log(value.id + "-" + " "+ value.name +","+ " " + "Cost:"
        +" "+ value.cost + " "+ "tickets");
});

let totalSum = 0;
function mainMenu() {
    console.log("");
    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");

    const input = require('sync-input');

    let numberId = input(" ");
    let parsedId = parseInt(numberId);

    if (parsedId === 1 && gifts.length != 0) {
        buyGift();
    } else if (gifts.length === 0) {
        console.log("Here's the list of gifts:");
        console.log("");
        console.log("Wow! There are no gifts to buy.");
        mainMenu();
    } else if (parsedId === 2) {
        console.log("Enter the ticket amount:");
        let ticketAmount = input(" ");
        let parsedTicket = parseInt(ticketAmount);
        if (parsedTicket < 0) {
            console.log("Please enter a valid number between 0 and 1000.");
            mainMenu();
        } else if (parsedTicket > 1000) {
            console.log("Please enter a valid number between 0 and 1000.")
            mainMenu();
        } else if (isNaN(parsedTicket) === true) {
            console.log("Please enter a valid number between 0 and 1000.")
            mainMenu();
        } else {
            totalSum += parsedTicket;
            console.log("Total tickets: " + totalSum);
            mainMenu();
        }
    } else if (parsedId === 3) {
        console.log("Total tickets: " + totalSum);
        mainMenu();

    } else if (parsedId === 4 && gifts.length != 0 ) {
        console.log("Here's the list of gifts:");
        console.log("");
            gifts.forEach(function (value) {
                console.log(value.id + "-" + " " + value.name + "," + " " + "Cost:"
                    + " " + value.cost + " " + "tickets");
            });
            mainMenu();
    } else  if (parsedId === 5 ){
        console.log("Have a nice day!");
    } else {
        console.log("Please enter a valid number!");
        mainMenu();
    }
}

mainMenu();

function buyGift(){
    console.log("Enter the number of the gift you want to get:");
    const input = require('sync-input');
    let giftId = input(" ");
    let parsedGift = parseInt(giftId);

    let giftItem = ["Teddy Bear", "Big Red Ball", "Huge Bear", "Candy", "Stuffed Tiger", "Stuffed Dragon",
        "Skateboard","Toy Car", "Basketball", "Scary Mask"];
    let giftPrice = [10,5,50,8,15,30,100,25,20,75];
        if(parsedGift === 1 && totalSum > 0){
            console.log("Here you go, one " + giftItem[0]+"!");
            console.log("Total tickets: " + (totalSum - giftPrice[0]));
            const itemToBeRemoved = {id: 1, name:"Teddy Bear", cost : 10};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 2 && totalSum > 0){
            console.log("Here you go, one " + giftItem[1]+"!");
            console.log("Total tickets: " + (totalSum - giftPrice[1]));
            const itemToBeRemoved = {id: 2, name: "Big Red Ball", cost: 5};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 3 && totalSum > 0){
            console.log("Here you go, one " + giftItem[2]+"!");
            console.log("Total tickets: " + (totalSum - giftPrice[2]));
            const itemToBeRemoved = {id: 3, name: "Huge Bear", cost:50};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 4 && totalSum > 0){
            console.log("Here you go, one " + giftItem[3]+"!");
            console.log("Total tickets: " + (totalSum -giftPrice[3]))
            const itemToBeRemoved = {id: 4, name: "Candy", cost: 8 };
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 5 && totalSum > 0){
            console.log("Here you go, one " + giftItem[4]+"!");
            console.log("Total tickets: " + (totalSum-giftPrice[4]));
            const itemToBeRemoved = {id: 5, name: "Stuffed Tiger", cost : 15};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 6 && totalSum > 0){
            console.log("Here you go, one " + giftItem[5]+"!");
            console.log("Total tickets: " + (totalSum -giftPrice[5]));
            const itemToBeRemoved = {id: 6, name: "Stuffed Dragon", cost:30};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 7 && totalSum > 0){
            console.log("Here you go, one " + giftItem[6]+"!");
            console.log("Total tickets: " + (totalSum -giftPrice[6]));
            const itemToBeRemoved = {id: 7, name:"Skateboard", cost: 100};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 8 && totalSum > 0){
            console.log("Here you go, one " + giftItem[7]+"!");
            console.log("Total tickets: " + (totalSum -giftPrice[7]));
            const itemToBeRemoved = {id: 8, name: "Toy Car", cost: 25};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 9 && totalSum > 0){
            console.log("Here you go, one " + giftItem[8]+"!");
            console.log("Total tickets: " + (totalSum -giftPrice[8]));
            const itemToBeRemoved = {id: 9, name: "Basketball", cost: 20};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (parsedGift === 10 && totalSum > 0){
            console.log("Here you go, one " + giftItem[9]+"!");
            console.log("Total tickets: " + (totalSum -giftPrice[9]));
            const itemToBeRemoved = {id: 10, name: "Scary Mask", cost: 75};
            gifts.splice(gifts.findIndex(a => a.id === itemToBeRemoved.id) , 1);
            mainMenu();
        } else if (isNaN(parsedGift) === true) {
            console.log("Please enter a valid number!");
            mainMenu();
        } else if (parsedGift > 10){
            console.log("There is no gift with that number!");
           mainMenu();
        }  else if (totalSum === 0) {
            console.log("You don't have enough tickets to buy this gift.");
           mainMenu();
        }
}




