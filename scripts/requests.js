const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to featch puzzle')        
    }
}

// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to featch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

const getCurrentCountry = async () => {
    const location = await getLocation()
    return countryName(location.country) 
}

const countryName = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all', {})
    
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch Country Name')
    }
    
} 

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/?token=ab306fc9c0749c', {})

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch ip')
    }
}

