// simple addition function
function add(a, b) {
    return a + b
}

// testing asynchronous code
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data Loaded'), 5000)
    })
}

// api testing mocking
function getAPIData() {
    return fetch('https://api.restful-api.dev/objects').then(resp => resp?.json()).then(data => data)
}
module.exports = {
    add,
    fetchData,
    getAPIData
}