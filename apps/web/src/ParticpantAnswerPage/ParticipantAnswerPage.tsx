import React from "react";
import Answer from "../Answer";
import Question from "../Question";

function ParticipantAnswerPage() {
  return (
    <div>
      <Question
        text="What is the capital of France?"
        answers={
          <div>
            <Answer id="paris" data="paris">
              Paris
            </Answer>
            <Answer id="london" data="london">
              London
            </Answer>
            <Answer id="rome" data="rome">
              Rome
            </Answer>
          </div>
        }
      />
    </div>
  );
}

export default ParticipantAnswerPage;
