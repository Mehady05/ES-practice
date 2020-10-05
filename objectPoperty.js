const students =[
    {id : 21, name:'Omar Sunny'},
    {id : 31, name:'Mannaaa'},
    {id : 41, name:'Mouri'},
    {id : 71, name:'Dipjol'},
]

const allName = []

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    allName.push(element.name)
    
}

console.log(allName)