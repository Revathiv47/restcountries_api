
function getUsers() {
    fetch("https://restcountries.eu/rest/v2/all", {
      method: "GET"
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((country) => loadUsers(country));
  }
  
  function loadUsers(country){
                                           
  const countryList = document.createElement("div");
    countryList.className="countryname";
    country.forEach((country) => {
     const countries = document.createElement("div");
     countries.className ="country";
  
      countries.innerHTML = `
      <img class="country-flag" src="${country.flag}" widht="50%" height="50%"></img>
  <div>
        <h3 class="country-name">${country.name}</h3>
        <p class="country-population"><b>Population:</b>${country.population}</p>
      <p class="country-region"><b>Region:${country.region}</p>
       </div>                              
      `;
  
      countryList.append(countries);
    });
  
    document.body.append(countryList);
  }
  
  getUsers();