const main =document.getElementById('main')
const url = 'https://rickandmortyapi.com/api/character'

fetch(url) 
 .then( resp => resp.json())
 .then(data => pintarPersonajes(data.results))
 .catch(err => console.log(err))


 const pintarPersonajes = (arr) =>{
    let str = '';
    for( let i = 0; i< arr.length; i++){
        const nombre = arr[i].name;
        const gender = arr[i].gender;
        const species = arr[i].species;
        const status = arr[i].status;
        const image = arr[i].image;
        str = str+ 
        `  <div class="tarjeta">
              <figure class="container-img">
                   <img src="${image}" alt="${nombre}">
              </figure>
              <div class="info">
                <p>${nombre}</p>
                <p>${gender}</p>
                <p>${species}</p>
                <p>${status}</p>
               </div>
            </div>`
    }
    main.innerHTML = str;
 }
