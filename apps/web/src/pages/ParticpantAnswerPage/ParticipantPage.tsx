import React from 'react'
import Answer from '../../answer/components/Answer'
import Question from '../../question/components/Question'

function ParticipantPage() {
  return (
    <div>
      <Question
        text="What is the capital of France?"
        answers={
          <div>
            <Answer id="paris" data="paris">Paris</Answer>
            <Answer id="london" data="london">London</Answer>
            <Answer id="rome" data="rome">Rome</Answer>
          </div>
        }
      />
    </div>
  )
}

export default ParticipantPage