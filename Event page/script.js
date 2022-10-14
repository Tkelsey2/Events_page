
let eventOne = {
    Name: 'Rodeo',
    Description: "Ever wanted to experience an authentic Rodeo show, now's your chance! Book now!",
    Image:"./Images/rodeo.jpeg" ,
    Date: '10/1/2023',
    Price: '£20.99',
}


let eventTwo = {
    Name: 'The Killers',
    Description: "Coming out of my cage and I've been feeling just fine.",
    Image:"./Images/The-Killers.jpeg",
    Date: '25/2/2023',
    Price: '£45',
}



let eventThree = {
    Name: 'Circus',
    Description: "Circus, Afro. Circus, Afro. Polka dot, polka dot, polka dot. AFRO!",
    Image:"./Images/Circus.jpeg" ,
    Date: '20/6/2023',
    Price: '£10',
}



let eventFour = {
    Name: 'Magic Mike',
    Description: "My name-a Jeff.",
    Image:"./Images/MagicMike.jpeg",
    Date: '20/4/2023',
    Price: '£69.99',
}


let eventFive = {
    Name: 'Donald Trump Speech',
    Description: "MAGA 2024",
    Image: "./Images/Trump.jpeg",
    Date: '11/9/2023',
    Price: 'A small loan of $1,000,000',
}

let eventSix = {
    Name: 'Putin Ted Talk',
    Description: "Well this is awkward.",
    Image:"./Images/Putin.jpeg" ,
    Date: 'TBA',
    Price: '1 Nuke',
}

let eventSeven = {
    Name: 'Lemons',
    Description: "Life gave it to us, time for lemonade",
    Image: "./Images/Lemons.jpeg",
    Date: '9/8/2023',
    Price: '1 Grape',
}

let eventEight = {
    Name: 'Hot Ones Live',
    Description: "Ever wanted to experience an authentic Rodeo show, now's your chance! Book now!",
    Image:"./Images/HotOnes.jpg" ,
    Date: '20/12/2022',
    Price: '£10.99',
}

let eventNine = {
    Name: 'Reading Festival',
    Description: "We were a rock and alternative music festival once.",
    Image:"./Images/Reading.png" ,
    Date: '24/8/2023',
    Price: '£250.99',
}

let eventTen = {
    Name: 'X-Games',
    Description: "Bones will be broken, heads will be smashed",
    Image:"./Images/Xgames.jpeg" ,
    Date: '27/1/2023',
    Price: '£40',
}

const firstEvent = document.querySelector('#EventOne');
//First Event adding
const firstHeader = document.createElement('h2');
let firstName = eventOne.Name;
console.log(firstName);
firstHeader.append(firstName);
firstEvent.appendChild(firstHeader);

const imageOne = document.createElement('img');
let firstImage = eventOne.Image;
imageOne.src = firstImage;
imageOne.append(firstImage);
firstEvent.appendChild(imageOne);

const descOne= document.createElement('p')
let firstDescription = eventOne.Description;
descOne.append(firstDescription);
firstEvent.appendChild(descOne);

const dateOne = document.createElement('h3');
let firstDate = eventOne.Date;
dateOne.append(firstDate);
firstEvent.appendChild(dateOne);

const priceOne = document.createElement('h3');
let firstPrice = eventOne.Price;
priceOne.append(firstPrice);
firstEvent.appendChild(priceOne);

const secondEvent = document.querySelector('#EventTwo');

//Second Event adding
const secondHeader = document.createElement('h2');
let secondName = eventTwo.Name;
console.log(secondName);
secondHeader.append(secondName);
secondEvent.appendChild(secondHeader);

const imageTwo = document.createElement('img');
let secondImage = eventTwo.Image;
imageTwo.src = secondImage;
imageTwo.append(secondImage);
secondEvent.appendChild(imageTwo);

const descTwo= document.createElement('p');
let secondDescription = eventTwo.Description;
descTwo.append(secondDescription);
secondEvent.appendChild(descTwo);

const dateTwo = document.createElement('h3');
let secondDate = eventTwo.Date;
dateTwo.append(secondDate);
secondEvent.appendChild(dateTwo);

const priceTwo = document.createElement('h3');
let secondPrice = eventTwo.Price;
priceTwo.append(secondPrice);
secondEvent.appendChild(priceTwo);

const thirdEvent = document.querySelector('#EventThree');

//Third Event adding

const thirdHeader = document.createElement('h2');
let thirdName = eventThree.Name;
console.log(thirdName);
thirdHeader.append(thirdName);
thirdEvent.appendChild(thirdHeader);

const imageThree = document.createElement('img');
let thirdImage = eventThree.Image;
imageThree.src = thirdImage;
imageThree.append(thirdImage);
thirdEvent.appendChild(imageThree);

const descThree= document.createElement('p');
let thirdDescription = eventThree.Description;
descThree.append(thirdDescription);
thirdEvent.appendChild(descThree);

const dateThree = document.createElement('h3');
let thirdDate = eventThree.Date;
dateThree.append(thirdDate);
thirdEvent.appendChild(dateThree);

const priceThree = document.createElement('h3');
let thirdPrice = eventThree.Price;
priceThree.append(thirdPrice);
thirdEvent.appendChild(priceThree);


const fourthEvent = document.querySelector('#EventFour')

//Fourth Event adding

const fourthHeader = document.createElement('h2');
let fourthName = eventFour.Name;
console.log(fourthName);
fourthHeader.append(fourthName);
fourthEvent.appendChild(fourthHeader);

const imageFour = document.createElement('img');
let fourthImage = eventFour.Image;
imageFour.src = fourthImage;
imageFour.append(fourthImage);
fourthEvent.appendChild(imageFour);

const descFour= document.createElement('p');
let fourthDescription = eventFour.Description;
descFour.append(fourthDescription);
fourthEvent.appendChild(descFour);

const dateFour = document.createElement('h3');
let fourthDate = eventFour.Date;
dateFour.append(fourthDate);
fourthEvent.appendChild(dateFour);

const priceFour = document.createElement('h3');
let fourthPrice = eventFour.Price;
priceFour.append(fourthPrice);
fourthEvent.appendChild(priceFour);


const fifthEvent = document.querySelector('#EventFive')
//Fifth Event adding

const fifthHeader = document.createElement('h2');
let fifthName = eventFive.Name;
console.log(fifthName);
fifthHeader.append(fifthName);
fifthEvent.appendChild(fifthHeader);

const imageFive = document.createElement('img');
let fifthImage = eventFive.Image;
imageFive.src = fifthImage;
imageFive.append(fifthImage);
fifthEvent.appendChild(imageFive);

const descFive= document.createElement('p');
let fifthDescription = eventFive.Description;
descFive.append(fifthDescription);
fifthEvent.appendChild(descFive);

const dateFive = document.createElement('h3');
let fifthDate = eventFive.Date;
dateFive.append(fifthDate);
fifthEvent.appendChild(dateFive);

const priceFive = document.createElement('h3');
let fifthPrice = eventFive.Price;
priceFive.append(fifthPrice);
fifthEvent.appendChild(priceFive);

const sixthEvent = document.querySelector('#EventSix')
//Sixth Event Adding

const sixthHeader = document.createElement('h2');
let sixthName = eventSix.Name;
console.log(sixthName);
sixthHeader.append(sixthName);
sixthEvent.appendChild(sixthHeader);

const imageSix = document.createElement('img');
let sixthImage = eventSix.Image;
imageSix.src = sixthImage;
imageSix.append(sixthImage);
sixthEvent.appendChild(imageSix);

const descSix= document.createElement('p');
let sixthDescription = eventSix.Description;
descSix.append(sixthDescription);
sixthEvent.appendChild(descSix);

const dateSix = document.createElement('h3');
let sixthDate = eventSix.Date;
dateSix.append(sixthDate);
sixthEvent.appendChild(dateSix);

const priceSix = document.createElement('h3');
let sixthPrice = eventSix.Price;
priceSix.append(sixthPrice);
sixthEvent.appendChild(priceSix);

const seventhEvent = document.querySelector('#EventSeven')
//Seventh Event Adding

const seventhHeader = document.createElement('h2');
let seventhName = eventSeven.Name;
console.log(seventhName);
seventhHeader.append(seventhName);
seventhEvent.appendChild(seventhHeader);

const imageSeven = document.createElement('img');
let seventhImage = eventSeven.Image;
imageSeven.src = seventhImage;
imageSeven.append(seventhImage);
seventhEvent.appendChild(imageSeven);

const descSeven= document.createElement('p');
let seventhDescription = eventSeven.Description;
descSeven.append(seventhDescription);
seventhEvent.appendChild(descSeven);

const dateSeven = document.createElement('h3');
let seventhDate = eventSeven.Date;
dateSeven.append(seventhDate);
seventhEvent.appendChild(dateSeven);

const priceSeven = document.createElement('h3');
let seventhPrice = eventSeven.Price;
priceSeven.append(seventhPrice);
seventhEvent.appendChild(priceSeven);

const eighthEvent = document.querySelector('#EventEight')
//Eighth Event Adding

const eighthHeader = document.createElement('h2');
let eighthName = eventEight.Name;
console.log(eighthName);
eighthHeader.append(eighthName);
eighthEvent.appendChild(eighthHeader);

const imageEight = document.createElement('img');
let eighthImage = eventEight.Image;
imageEight.src = eighthImage;
imageEight.append(eighthImage);
eighthEvent.appendChild(imageEight);

const descEight= document.createElement('p');
let eighthDescription = eventEight.Description;
descEight.append(eighthDescription);
eighthEvent.appendChild(descEight);

const dateEight = document.createElement('h3');
let eighthDate = eventEight.Date;
dateEight.append(eighthDate);
eighthEvent.appendChild(dateEight);

const priceEight = document.createElement('h3');
let eighthPrice = eventEight.Price;
priceEight.append(eighthPrice);
eighthEvent.appendChild(priceEight);

const ninthEvent = document.querySelector('#EventNine')
//Ninth Event Adding
const ninthHeader = document.createElement('h2');
let ninthName = eventNine.Name;
console.log(ninthName);
ninthHeader.append(ninthName);
ninthEvent.appendChild(ninthHeader);

const imageNine = document.createElement('img');
let ninthImage = eventNine.Image;
imageNine.src = ninthImage;
imageNine.append(ninthImage);
ninthEvent.appendChild(imageNine);

const descNine= document.createElement('p');
let nineDescription = eventNine.Description;
descNine.append(nineDescription);
ninthEvent.appendChild(descNine);

const dateNine = document.createElement('h3');
let ninthDate = eventNine.Date;
dateNine.append(ninthDate);
ninthEvent.appendChild(dateNine);

const priceNine = document.createElement('h3');
let ninthPrice = eventNine.Price;
priceNine.append(ninthPrice);
ninthEvent.appendChild(priceNine);

const tenthEvent = document.querySelector('#EventTen')
//Tenth Event Adding

const tenthHeader = document.createElement('h2');
let tenthName = eventTen.Name;
console.log(tenthName);
tenthHeader.append(tenthName);
tenthEvent.appendChild(tenthHeader);

const imageTen = document.createElement('img');
let tenthImage = eventTen.Image;
imageTen.src = tenthImage;
imageTen.append(tenthImage);
tenthEvent.appendChild(imageTen);

const descTen = document.createElement('p');
let tenthDescription = eventTen.Description;
descTen.append(tenthDescription);
tenthEvent.appendChild(descTen);

const dateTen = document.createElement('h3');
let tenthDate = eventTen.Date;
dateTen.append(tenthDate);
tenthEvent.appendChild(dateTen);

const priceTen = document.createElement('h3');
let tenthPrice = eventTen.Price;
priceTen.append(tenthPrice);
tenthEvent.appendChild(priceTen);
