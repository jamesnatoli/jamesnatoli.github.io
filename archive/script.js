console.log("Hello, world!");

function getRandomNumber() {
  return Math.random();
}

// Generate a random number between 0 (inclusive) and 1 (exclusive)
let randomNumber = getRandomNumber();
console.log(randomNumber);

// Generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInteger = getRandomInt(1, 10); // Generates a random integer between 1 and 10
console.log(randomInteger);

// API Call
function getNextDepartute() {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("apiKey", "1b6ec3a6df230cf8f6567dd4e2079997e310594fb7d5e6fe9e8745753c4eacc1");
    
    const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
    };
    
    fetch("https://external.transitapp.com/v3/public/stop_departures?&global_stop_id=JOCOKS:3063&time=1774494323&remove_cancelled=false&should_update_realtime=true&max_num_departures=3", requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.error(error));
}
