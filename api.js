//get
//post
//put
//pacth
//detete

// CRUD 

// c = create 

// r = read 

// u = update 

// d = delete


document.querySelector(".btn").addEventListener("click", getJokes);


function getJokes(e) {


    let catagory = [];


    if (nerdy.checked && explicit.checked) {
        catagory += ["nerdy", "explicit"]

        const http = new Http;
        http.get('https://api.icndb.com/jokes/random?exclude=catagory')
            .then(res => {
                const data = document.querySelector('.data').textContent = res.value.joke

            })

    } else if (nerdy.checked) {
        catagory += "nerdy";

        const http = new Http;
        http.get('https://api.icndb.com/jokes/random?exclude=catagory')
            .then(res => {
                const data = document.querySelector('.data').textContent = res.value.joke

            })

    } else if (explicit.checked) {
        catagory += "explicit";
        const http = new Http;
        http.get('https://api.icndb.com/jokes/random?exclude=catagory')
            .then(res => {
                const data = document.querySelector('.data').textContent = res.value.joke

            })

    } else {
        alert("plz select a catagory");
    }

}




// document.querySelector(".button").addEventListener("click", getJoke);

// function getJoke() {


//     const http = new Http;
//     http.get('http://api.icndb.com/categories')
//         .then(res => {


//             console.log(res);


//         })


// }

// getJoke()

// async function getJokes(){

//     const result = await fetch('http://api.icndb.com/jokes/random')

//                   .then(e => e.json())

//             const data =  document.querySelector('.data').textContent = result.value.joke;

// }