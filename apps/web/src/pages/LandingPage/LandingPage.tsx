import React from 'react'
import { Button as FlowbiteButton } from 'flowbite-react';
import GameForm from '../../game/components/GameForm/GameForm';
import GameSessionForm from '../../game/components/GameSessionForm/GameSessionForm';
import Answer from '../../answer/components/Answer';

type LandingPageTab = 'create-game' | 'start-session';

type LandingPageProps = React.HTMLAttributes<HTMLDivElement> & {
  tab?: LandingPageTab;
};

function LandingPage({
  tab: tabProp = 'create-game',
  className,
  ...rest
}: LandingPageProps) {

  const [tab, setTab] = React.useState<LandingPageTab>(tabProp || 'create-game')

  return (
    <div>
      <div className="spacing-4">
        <FlowbiteButton.Group>
          <FlowbiteButton color="gray" onClick={() => setTab('create-game')}>Create Game</FlowbiteButton>
          <FlowbiteButton color="gray" onClick={() => setTab('start-session')}>Start Session</FlowbiteButton>
        </FlowbiteButton.Group>

        {tab === 'create-game' && (
          <GameForm />
        )}

        {tab === 'start-session' && (
          <GameSessionForm />
        )}
      </div>
    </div>
  )
}

export default LandingPage