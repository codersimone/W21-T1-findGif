const getGif = document.getElementById('serchGif').value;
//вернуть эвентлисенер!!

function findGif() {

    let q = "sun";

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=EtVLIEKThUFqMDfAwS4KkeyOisuLiK6v&q=${q}&limit=5&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(gif => {
        console.log(gif)
        //где взять значения для src??
        document.getElementById('firstGif').src = "https://gph.is/g/aR8RmD6";
        //document.getElementById('secondGif').src = "https://giphy.com/gifs/animation-loop-sun-26BGDQxDCZDFHW5Ne";
        //document.getElementById('thirdGif').src = gif.;
        //document.getElementById('fourthGif').src = gif.;
        //document.getElementById('fifthGif').src = gif.;
    })
    .catch(error => console.log(error));
} 

findGif();

//1/ чтение переменной из поля ввода (инпут)
//2/ вывести картинки на экран (урлы из консоли)




//_____________________________________________________________________________________________________________

// function findGif() {
//     //let getGif = document.getElementById('serchGif').value;
//     let parameters = {
//         api_key: "EtVLIEKThUFqMDfAwS4KkeyOisuLiK6v",
//         q: "love",
//         limit: 5,
//         rating: "g",
//         lang: "en",
//     }
//     fetch("https://api.giphy.com/v1/gifs/search", {
//         method: "POST",
//         headers: {
//             "Content-Type": "text/plain;charset=UTF-8",
//             "X-API-KEY": "EtVLIEKThUFqMDfAwS4KkeyOisuLiK6v",
//             "Access-Control-Allow-Origin": "https://api.giphy.com",
//             "Access-Control-Expose-Headers": "Content-Encoding,API-Key",
//         },
//         body: JSON.stringify(parameters),
//     })
//     .then(response => response.json())
//     .then(gif => {
//         console.log(gif)
//         //где взять значения для src??
//         //document.getElementById('firstGif').src = gif.;
//         //document.getElementById('secondGif').src = gif.;
//         //document.getElementById('thirdGif').src = gif.;
//         //document.getElementById('fourthGif').src = gif.;
//         //document.getElementById('fifthGif').src = gif.;
//     })
//     .catch(error => console.log(error));
// } 
// findGif();
