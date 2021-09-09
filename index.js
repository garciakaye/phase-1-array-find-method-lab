const record = [
    {year: '2018', result: 'L'},
    {year: '2017', result: 'W'},
    {year: '2017', result: 'N/A'}
]

// Write a function called superbowlWin()

function superbowlWin(array){
    const found = array.find(element => element.result === 'W');
     return !!found ? found.year :  undefined
}

