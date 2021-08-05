window.addEventListener('DOMContentLoaded', (e) => {

    console.log('dom loaded')
    //get the input
    const firstInput = document.querySelector('.choice-input')

    //get the add button
    const addChoiceButton = document.querySelector(".add-choice");

    //get the remove button
    const removeChoiceButton = document.querySelector(".minus-choice")

    //get the wrapper for the choices



    //this function creates a new choice and appends it to the dom
    const createNewChoice = () => {
        console.log('creating new choice...')

        const input = document.createElement('input')
        .classList.add('choice-input')
        .placeholder('Enter a place to eat')

        const button = document.createElement('button')
        .classList.add('minus-choice').contentText('Remove')

        const div = document.createElement('div')
        .classList.add('choice-wrapper')

        div.append(input)
        div.append(button)
    }

    //handle the add choice button click
    addChoiceButton.addEventListener('click', createNewChoice)



    const removeChoice = () => {
        console.log('removing choice..')
    }

    //handle the remove button click
    removeChoiceButton.addEventListener('click', removeChoice)

 

})