import axios from 'axios'

export function fetch (url, requestClass, data) {
  return new Promise((resolve, reject) => {
    if (requestClass === 'post') {
      axios.post(url, data)
        .then(response => {
          resolve(response.data)
        })
    } else {
      axios.get(url)
        .then(response => {
          resolve(response.data)
        })
    }
  })
}

export function fetchData (data) {
  return fetch('appData')
}
