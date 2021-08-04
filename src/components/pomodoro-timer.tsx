import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInterval } from "../hooks/use-interval";

//  # My own files
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("working");
  }, [working]);
  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="work" onClick={() => configureWork()}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
        <Button
          text={timeCounting ? "Pause" : "Play"}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>
      <div className="details">
        <p>Teste asaasasasasasasasasasasasasasasas</p>
        <p>Teste asaasasasasasasasasasasasasasasas</p>
        <p>Teste asaasasasasasasasasasasasasasasas</p>
        <p>Teste asaasasasasasasasasasasasasasasas</p>
      </div>
    </div>
  );
}
