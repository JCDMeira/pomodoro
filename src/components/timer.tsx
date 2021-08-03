import React from "react";
import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="time">{secondsToTime(props.mainTime)}</div>;
}
