let p = document.querySelector('#newFact');
let p2 = document.querySelector('#fact2');
let img = document.querySelector('#dogs');
let button = document.querySelector('button')
let url = 'https://catfact.ninja/fact';
let url2 = 'https://dog.ceo/api/breeds/image/random'
//axios
async function getFact() {
  let randomFact = await axios.get(url)
  return randomFact.data.fact
}

button.addEventListener('click', async () => {
  p2.innerText = await getFact();
  p.innerText = await getFact2()
  getDogImage().
    then((data) => {
      return data.json()
    })
    .then((data) => {
      img.src = data.message
    })
    .catch(() => {
      console.log("error")
    })
})

//fetch

async function getFact2() {
  let randomFact = await fetch(url);
  let getFactData = await randomFact.json();
  return getFactData.fact;
}

//using Promise chaining
function getDogImage() {
  return new Promise((resolve, reject) => {
    resolve(fetch(url2));
  })
}


// getDogImage().then((res) => {
//   img.src =
// })

