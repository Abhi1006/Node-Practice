console.log('Client side javascript file is loaded!')

fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})


const weatherform = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
//messageOne.textContent = 'From javascript'

weatherform.addEventListener('submit', () =>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...!'
    messageTwo.textContent = ''

    fetch('/weather?address=boston' + location).then((response)=>{
     response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
                //console.log(data.error)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = dara.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            }

        })
    })
})


