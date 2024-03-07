import React from "react";

import GameForm from "../Game/GameForm";
import GameSessionForm from "../GameSession/GameSessionForm";
import Tabs from "../Tabs";

type LandingPageTab = "create-game" | "start-session";

type LandingPageProps = React.HTMLAttributes<HTMLDivElement> & {
  tab?: LandingPageTab;
};

function LandingPage({
  tab: tabProp = "create-game",
  className,
  ...rest
}: LandingPageProps) {
  const [tab, setTab] = React.useState<LandingPageTab>(
    tabProp || "create-game"
  );

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="spacing-4">
        <Tabs.TabBar>
          <Tabs.TabButtonItem
            color="gray"
            onClick={() => setTab("create-game")}
            active={tab === "create-game"}
          >
            Create Game
          </Tabs.TabButtonItem>
          <Tabs.TabButtonItem
            color="gray"
            onClick={() => setTab("start-session")}
            active={tab === "start-session"}
          >
            Start Session
          </Tabs.TabButtonItem>
        </Tabs.TabBar>
      
        <div className="py-8">
          {tab === "create-game" && <GameForm />}

          {tab === "start-session" && <GameSessionForm />}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
