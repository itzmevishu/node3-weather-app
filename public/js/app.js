console.log('Client-side JS file loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    const weatherUrl = '/weather?address='+ search.value
    fetch(weatherUrl).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
            } else {
                console.log(data)
                messageOne.textContent = data.forecast
                messageTwo.textContent = data.location
            }
        })
    })
})
