import data from '../inventario.json'

export const getData = () =>{
    return new Promise((resolve, reject) =>{
        resolve(data)
    })
}

