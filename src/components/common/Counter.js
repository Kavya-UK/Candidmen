import { useCountdown } from "./CountDownHook";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="not-italic font-normal font-PortLligatSans text-[30px] lg:text-[34px] xl:text-[42px] leading-[51px] text-black">
      <span className="bg-white  px-[15px] py-[8px] rounded-[10px]">
        {`${hours}`.split("")[0]}
      </span>
      <span className="bg-white ml-[5px] px-[12px] py-[8px] rounded-[10px]">
        {`${hours}`.split("")[1]}
      </span>
      <span className="bg-white ml-[25px] px-[12px] py-[8px] rounded-[10px]">
        {`${minutes}`.split("")[0]}
      </span>
      <span className="bg-white ml-[5px] px-[12px] py-[8px] rounded-[10px]">
        {`${minutes}`.split("")[1]}
      </span>
      <span className="bg-white ml-[25px] px-[12px] py-[8px] rounded-[10px]">
        {`${seconds}`.split("")[0]}
      </span>
      <span className="bg-white ml-[5px] px-[12px] py-[8px] rounded-[10px]">
        {`${seconds}`.split("")[1]}
      </span>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};
export default CountdownTimer;
