import React from "react";
import { useState } from "react";
import { useInterval } from "../hooks/use-interval";

//  # My own files
import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return <div>Olá mundo {secondsToTime(mainTime)}</div>;
}
