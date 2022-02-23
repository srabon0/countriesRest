const loadCountries = () =>{
    fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then( response => displayAllCountries(response))
    
}

const displayAllCountries = (countires) =>{
    const countryHolder = document.getElementById('container');
    countires.forEach( country => {
           
            const div = document.createElement('div');
            div.innerHTML = `
            <h3> ${country.name} </h3>
            <p>${country.capital}</p>
            <img class="flag" src="${country.flags.png}" alt="this is ${country.name}" >
            <button onclick="loadCountryDetails('${country.name}')" >Country details </button>`
            // const h3 = document.createElement('h3');
            // const p = document.createElement('p');
            // const img = document.createElement('img');
            // img.classList.add('flag');
            // h3.innerText = country.name;
            
            // p.innerText = country.capital;
            // img.setAttribute('src',`${country.flags.png}`);
            // div.appendChild(h3);
            // div.appendChild(p);
            // div.appendChild(img);

            countryHolder.appendChild(div);
        
        
        } )
}

loadCountries();

const loadCountryDetails = (name) =>{
    const url =`https://restcountries.com/v2/name/${name}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then (data => dataOftheCountry(data[0]))
}
const dataOftheCountry = (country) => {
    console.log(country.name)
    const single = document.getElementById('country-container');
    single.innerHTML = `
    <h1> ${country.name} </h1>
    <h3>The population is ${ country.population } </h3>`
    single.style.display = "block";

    
}