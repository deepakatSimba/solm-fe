// @ts-nocheck
import { IoCloseOutline } from "react-icons/io5";
import punjabi from "./punjabi.json";

const Keyboard = ({ activeKey, incorrectLetter, keyboardMode }: any) => {
  // check correct/wrong letter and apply styles
  const applyBgColor = (activeKey, id, normalKey, shiftKey) => {
    if (activeKey === id) {
      return "bg-primary text-white";
    } else {
      return "bg-[#D6D6D6]";
    }
    // else if (incorrectLetter === (normalKey || shiftKey)) {
    //   return "bg-red-100 text-red-500";
  };

  const handleClick = (normalKeyValue, isShiftKey) => {
    console.log("Clicked key value:", normalKeyValue);
    console.log("Shift key pressed:", isShiftKey);
  };

  return (
    <div className="bg-white text-3xl w-full flex flex-col gap-y-1 lg:gap-y-2">
      {/* ----row1------ */}
      <div className="bg-white w-full flex gap-x-1 lg:gap-x-2 justify-center">
        {Object.values(punjabi.row1).map(
          ({ normalKey, shiftKey, id, id2 }, idx) => (
            <div key={idx} className="text-primary bg-white ">
              <div
                className={`size-[26px] sm:size-[45px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[65px] flex items-center justify-center relative rounded-sm ${applyBgColor(
                  activeKey?.id,
                  id,
                  normalKey.english,
                  shiftKey.english
                )}`}
              >
                <span className="hidden sm:flex -mt-1 text-base lg:text-lg xl:text-[20px]">
                  {shiftKey.gurmukhi}
                </span>
                {id !== "key1text" && (
                  <span className="absolute flex bottom-1 right-2 text-base lg:text-lg xl:text-[20px]">
                    {normalKey.gurmukhi}
                  </span>
                )}
                {/* row 1 first key '`' */}
                {id === "key1text" && (
                  <span className="absolute hidden sm:block bottom-0 left-2 text-base lg:text-lg xl:text-[20px]">
                    {normalKey.english}
                  </span>
                )}
                {/* row 1 first key '~' */}
                {id === "key1text" && (
                  <span className="absolute top-0 left-2 text-base lg:text-lg xl:text-[20px]">
                    {shiftKey.english}
                  </span>
                )}
              </div>
            </div>
          )
        )}
        <div className="size-[26px] sm:w-[55px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[88px] xl:w-[90px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-lg lg:text-3xl text-primary">
            <IoCloseOutline />
          </span>
        </div>
      </div>
      {/* ------ row 2 ----- */}
      <div className="bg-white w-full flex gap-x-1 lg:gap-x-2 justify-center">
        <div className="size-[26px] sm:w-[55px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[88px] xl:w-[90px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-sm md:text-lg lg:text-xl text-primary">
            tab
          </span>
        </div>
        {Object.values(punjabi.row2).map(
          ({ normalKey, shiftKey, id, id2 }, idx) => (
            <div key={idx} className="text-primary bg-white ">
              <div
                className={`size-[26px] sm:size-[45px] lg:h-[50px] xl:h-[60px] lg:w-[50px] xl:w-[65px] flex items-center justify-center relative rounded-sm ${
                  activeKey?.id === id
                    ? "bg-primary text-white"
                    : "bg-[#D6D6D6]"
                }`}
                onClick={() => handleClick(normalKey.gurmukhi, false)}
              >
                <span className="flex sm:-mt-3 text-base lg:text-lg xl:text-[20px]">
                  {normalKey.gurmukhi}
                </span>

                {/* bottom left gurmukhi keys */}
                <span className="absolute hidden sm:flex bottom-[2px] left-1 text-base lg:text-base xl:text-[20px]">
                  {shiftKey.gurmukhi}
                </span>

                {/* bottom right english keys */}
                <span className="absolute hidden sm:flex bottom-0 right-2 text-base lg:text-base font-serif">
                  {shiftKey.english}
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {/* ------ row 3 ----- */}
      <div className="bg-white w-full flex gap-x-1 lg:gap-x-2 justify-center">
        <div className="w-[40px] h-[26px] sm:w-[75px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[98px] xl:w-[120px] flex element-center rounded-sm bg-[#D6D6D6]">
          <span className="flex text-sm sm:text-lg lg:text-xl text-primary">caps</span>
        </div>
        {Object.values(punjabi.row3).map(
          ({ normalKey, shiftKey, id, id2 }, idx) => (
            <div key={idx} className="text-primary bg-white ">
              <div
                className={`size-[26px] sm:size-[45px] lg:h-[50px] xl:h-[60px] lg:w-[50px] xl:w-[65px] flex items-center justify-center relative rounded-sm ${applyBgColor(
                  activeKey?.id,
                  id,
                  normalKey.english,
                  shiftKey.english
                )}`}
              >
                <span className="flex sm:-mt-3 text-base lg:text-lg xl:text-[20px]">
                  {normalKey.gurmukhi}
                </span>

                {/* bottom left gurmukhi keys */}
                <span className="absolute hidden sm:flex bottom-[2px] left-1 text-base lg:text-base xl:text-[20px]">
                  {shiftKey.gurmukhi}
                </span>

                {/* bottom right english keys */}
                <span className="absolute hidden sm:flex bottom-0 right-2 text-base lg:text-base font-serif">
                  {shiftKey.english}
                </span>
              </div>
            </div>
          )
        )}
        <div className="w-[40px] h-[26px] sm:w-[75px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[98px] xl:w-[110px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-sm sm:text-lg lg:text-xl text-primary">enter</span>
        </div>
      </div>
      {/* ------ row 4 ----- */}
      <div className="bg-white w-full flex gap-x-1 lg:gap-x-2 justify-center">
        <div
          className={`w-[55px] h-[26px] sm:w-[100px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[127px] xl:w-[150px] flex element-center rounded-sm ${
            activeKey?.type === "shift"
              ? "bg-primary text-white"
              : "bg-[#D6D6D6] text-primary"
          }`}
        >
          <span className="flex text-sm sm:text-lg lg:text-xl">shift</span>
        </div>
        {Object.values(punjabi.row4).map(
          ({ normalKey, shiftKey, id, id2 }, idx) => (
            <div key={idx} className="text-primary bg-white ">
              <div
                className={`size-[26px] sm:size-[45px] lg:h-[50px] xl:h-[60px] lg:w-[50px] xl:w-[65px] flex items-center justify-center relative rounded-sm ${
                  activeKey?.id === id
                    ? "bg-primary text-white"
                    : "bg-[#D6D6D6]"
                }`}
              >
                <span className="flex sm:-mt-3 text-base lg:text-lg xl:text-[20px]">
                  {normalKey.gurmukhi}
                </span>

                {/* bottom left gurmukhi keys */}
                <span className="absolute hidden sm:flex bottom-[2px] left-1 text-base lg:text-base xl:text-[20px]">
                  {shiftKey.gurmukhi}
                </span>

                {/* bottom right english keys */}
                <span className="absolute hidden sm:flex bottom-0 right-2 text-base lg:text-base font-serif">
                  {shiftKey.english}
                </span>
              </div>
            </div>
          )
        )}
        <div
          className={`w-[55px] h-[26px] sm:w-[100px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[127px] xl:w-[150px] flex element-center rounded-sm ${
            activeKey?.type === "shift"
              ? "bg-primary text-white"
              : "bg-[#D6D6D6] text-primary"
          }`}
        >
          <span className="flex text-sm sm:text-lg lg:text-xl">shift</span>
        </div>
      </div>

      {/* ------ row 5 last ----- */}
      <div className="bg-white w-full flex gap-x-1 lg:gap-x-2 justify-center">
        {/* ctrl */}
        <div className="w-[55px] h-[26px] sm:w-[100px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[127px] xl:w-[150px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-sm sm:text-lg lg:text-xl text-primary">ctrl</span>
        </div>
        {/* alt */}
        <div className="w-[55px] h-[26px] sm:w-[100px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[115px] xl:w-[150px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-sm sm:text-lg lg:text-xl text-primary">alt</span>
        </div>
        {/* space */}
        <div className="w-[180px] h-[26px] sm:w-[280px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[326px] xl:w-[405px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-primary" />
        </div>
        {/* alt */}
        <div className="w-[55px] h-[26px] sm:w-[100px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[115px] xl:w-[150px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-sm sm:text-lg lg:text-xl text-primary">alt</span>
        </div>
        {/* ctrl */}
        <div className="w-[55px] h-[26px] sm:w-[100px] sm:h-[45px] lg:h-[50px] xl:h-[60px] lg:w-[127px] xl:w-[150px] bg-[#D6D6D6] flex element-center rounded-sm">
          <span className="flex text-sm sm:text-lg lg:text-xl text-primary">ctrl</span>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
