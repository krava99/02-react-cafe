import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onReset: () => void;
  onVote: (type: VoteType) => void;
  canReset: boolean;
}

export const VoteOptions = ({
  onReset,
  onVote,
  canReset,
}: VoteOptionsProps) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote("bad")}>
        Bad
      </button>

      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={() => onReset()}
        >
          Reset
        </button>
      )}
    </div>
  );
};
