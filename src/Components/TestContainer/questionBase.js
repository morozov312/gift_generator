import getId from 'uniqid'

const questionsBase = [
    {
        id: getId(),
        question: 'Lorem ipsum ?',
        answers: ['a', 'b', 'c']
    },
    {
        id: getId(),
        question: 'Lorem ipsum ? \n Lorem ipsum ?',
        answers: ['d', 'e', 'i']
    },
    {
        id: getId(),
        question: 'Lorem ipsum ?',
        answers: ['f', 'g', 'h']
    },
    {
        id: getId(),
        question: 'Lorem ipsum ? \n Lorem ipsum ?',
        answers: ['i', 's', 'f']
    },
    {
        id: getId(),
        question: 'Lorem ipsum ?',
        answers: ['ff', 'gg', 'ce']
    },
]

// console.log(questionsBase.map(i => {
//      return i.id
// }))

export default questionsBase