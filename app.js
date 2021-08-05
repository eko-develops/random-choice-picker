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
    textarea.addEventListener('keyup', (e) => {
        createChoice(e.target.value)
    })

    function createChoice(choices){
        const choicesList = choices.split(',')  //split where there is a comma
        const filterEmptyChoices = choicesList.filter( choice => choice !== ' ' )   //filter out empty choices
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

})