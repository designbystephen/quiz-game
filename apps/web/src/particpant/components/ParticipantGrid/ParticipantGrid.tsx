import React from "react";
import Dot from "../../../common/Dot";
import cn from "../../../utils/cn";

export type ParticipantGridProps = React.HTMLAttributes<HTMLDivElement> & {
  participants: {
    name: string;
    active?: boolean | undefined;
  }[];
};

function ParticipantGrid({
  participants,
  className,
  ...rest
}: ParticipantGridProps) {
  return (
    <div
      className={cn("flex jusitfy-start items-center gap-4", className)}
      {...rest}
    >
      {participants.map((participant) => (
        <div
          key={participant.name}
          className={cn(
            "bg-transparent border border-gray-500/75 shadow-sm  py-2 px-6 rounded-full text-sm",
          )}
        >
          {Boolean(participant.active) && (
            <Dot className=" absolute top-2 right-2" variant="success" />
          )}
          {participant.name}
        </div>
      ))}
    </div>
  );
}

export default React.memo(ParticipantGrid);
