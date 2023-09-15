import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState("") 

  useEffect(() => {
      console.log('fetching countries...')
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          console.log(response.data)
          setCountries(response.data)
        })
  }, [])

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setSearchString(event.target.value)
  }
  return (
    <>
    <form>
      <input value={searchString} type="text" onChange ={handleInputChange} />
      <Countries countries={countries} searchString={searchString} setSearchString={setSearchString}/>
    </form>
    </>
  )
}

const Countries = ({countries, searchString, setSearchString}) =>{
  const countriesWithinSearch = countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()))
  if(countriesWithinSearch.length >= 10){
    return <div>There is too many countries within the search</div>
  }
  if(countriesWithinSearch.length === 1){
    const country = countriesWithinSearch[0]
    return(
      <div>
        <Country country={country}/>
      </div>
    )
  }
  return(
    <>
      {countriesWithinSearch.map(country => <div key={country.name.common}>{country.name.common}<button onClick={()=>setSearchString(country.name.common)}>show</button></div>)}
    </>
  )
}

const Country = ({country}) =>{
  return(
    <>
    <h1>{country.name.common}</h1>
        <p>Capital: <b>{country.capital[0]}</b></p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map(language => <li>{language}</li>)}
        </ul>
        <img src={country.flags.png}/>
    </>
  )
}

export default App
