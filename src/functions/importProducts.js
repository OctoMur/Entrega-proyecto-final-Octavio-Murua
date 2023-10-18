import data from '../invetoryArticles.json'

export const getData = () =>{
    return new Promise((resolve, reject) =>{
        resolve(data)
    })
}

