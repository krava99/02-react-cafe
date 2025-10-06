import { useState } from "react";
import { CafeInfo } from "../CafeInfo/CafeInfo";
import { VoteOptions } from "../VoteOptions/VoteOptions";
import { VoteStats } from "../VoteStats/VoteStats";
import css from "./App.module.css";
import type { Votes } from "../../types/votes";
import { Notification } from "../Notification/Notification";

export const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const onVote = (btnClick: keyof Votes) => {
    setVotes({ ...votes, [btnClick]: votes[btnClick] + 1 });
  };

  const onReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVote={onVote}
          onReset={onReset}
          canReset={!!totalVotes}
        />

        {totalVotes ? (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
};
