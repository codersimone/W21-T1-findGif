
function findGif() {

    //let getGif = document.getElementById('serchGif').value;
    let parameters = {
        api_key: "EtVLIEKThUFqMDfAwS4KkeyOisuLiK6v",
        q: "love",
        limit: 5,
        rating: "g",
        lang: "en",
    }
    fetch("https://api.giphy.com/v1/gifs/search", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=UTF-8",
            "X-API-KEY": "EtVLIEKThUFqMDfAwS4KkeyOisuLiK6v",
            "Access-Control-Allow-Origin": "https://api.giphy.com",
            "Access-Control-Expose-Headers": "Content-Encoding,API-Key",
        },
        body: JSON.stringify(parameters),
    })
    .then(response => response.json())
    .then(gif => {
        console.log(gif)
        //где взять значения для src??
        //document.getElementById('firstGif').src = gif.;
        //document.getElementById('secondGif').src = gif.;
        //document.getElementById('thirdGif').src = gif.;
        //document.getElementById('fourthGif').src = gif.;
        //document.getElementById('fifthGif').src = gif.;
    })
    .catch(error => console.log(error));
} 
findGif();