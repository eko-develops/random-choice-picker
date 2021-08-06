window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')
  
    //get the textarea
    const textarea = document.querySelector('textarea')

    //get the randomize button
    const button = document.querySelector('.randomize')

    //get the choices wrapper
    const choicesWrapper = document.querySelector('.choices')


    textarea.focus()    //automatically focuses the textarea when page loads

    //get the value from the textarea
    textarea.addEventListener('keyup', (e) => createChoice(e.target.value))

    //function for creating the choice as the user types
    function createChoice(choices){
        const choicesList = choices.split(',')  //split where there is a comma
        const filterEmptyChoices = choicesList.filter( choice => choice.length > 0 )   //filter out empty choices
        const trimChoices = filterEmptyChoices.map( (choice) => choice.trim() ) //remove whitespace at beginning and end of every choice
        
        choicesWrapper.textContent = ''

        //create a choice element for each choice
        trimChoices.forEach( (choice) => {
            const choiceSpan = document.createElement('span')
            choiceSpan.classList.add('choice')
            choiceSpan.textContent = choice
            choicesWrapper.appendChild(choiceSpan)
        })
   
    }

    //event listener for when button is clicked
    button.addEventListener('click', (e) => {
        const currentChoices = document.querySelectorAll('.choice')
        currentChoices.forEach( (choice) => choice.classList.remove('selected-choice')) //ensures there is no highlighted choice when clicking randomize button again
        randomize()
    })

    //function for looping through node list of choices
    function randomize(){

        //lets loop through each nodelist and give it the highlight class
        //if we want a function to run every couple seconds, we can use setInterval
        const interval = setInterval(() => {

            //we need to get a random choice every couple seconds to mimic the animation
            //every 100ms get a new random choice
            const randomChoice = getRandomChoice()
            console.log(randomChoice)

            //when we get that random choice, lets highlight it
            randomChoice.classList.add('selected-choice')

            //now we need to remove the highlight from the previous choice
            //we can use setTimeout to fire a function that will remove the class after a the amount of time it takes to add
            setTimeout(() => {
                randomChoice.classList.remove('selected-choice')
            }, 100) //after 100ms, remove the class from the random choice
        }, 100) //every 100ms, fire this function


        //now the interval needs to be stopped
        //we can use clearInterval to stop the interval after an amount of ms
        setTimeout(() => {
            clearInterval(interval)

            //after stopping the interval, we want to pick a choice and highlight it as the chosen choice
            const chosenChoice = getRandomChoice()
            chosenChoice.classList.add('selected-choice')

        }, 20 * 100)    //let the highlight bounce 20 times before stopping the interval
    }

    function getRandomChoice(){
        //we'll need to get all the current choices as a node list
        //we want a node list because it is similar to an array where each node has an index
        const allChoices = document.querySelectorAll('.choice') //each choice has the class choice
        return allChoices[Math.floor(Math.random() * allChoices.length)]
    }

})