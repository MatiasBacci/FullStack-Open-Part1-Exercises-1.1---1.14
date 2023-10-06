import { useState } from 'react'

const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

const Title = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))  
  const [maxVotes, setMaxVotes] = useState(0)
  const [indexOfMaxVotes, setIndexOfMaxVotes] = useState(0)

  const randomAnecdote = () => {
    let randomIndex = Math.floor(Math.random() * anecdotes.length);
    // we validate the assignment to prevent repeating the same anecdote
    while (randomIndex === selected) {
      randomIndex = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(randomIndex)
  }

  const addVote = () => {
    const copyVotes = [...votes] // creates new copy of array
    copyVotes[selected] += 1 // increment te value of the selected anecdote
    setVotes(copyVotes) // set new value 
    
    const newMaxVotes = Math.max(...copyVotes) // we search for the max number
    setMaxVotes(newMaxVotes) // set the max number of votes
    
    const newIndexOfMaxVotes = copyVotes.indexOf(newMaxVotes) // we save the index of that number
    setIndexOfMaxVotes(newIndexOfMaxVotes) // set the new index of max votes
  }

  return (
    <div>
      <Title text="Anecdote of the Day" />
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <Button handleClick={randomAnecdote} text="Random Anecdote"/>
      <Button handleClick={addVote} text="Vote"/>
      <Title text="Anecdote with most votes" />
      {anecdotes[indexOfMaxVotes]}
    </div>
  )
}

export default App