import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const GurmukhiKeyboard = ({ keyboard }: any) => {
  const [layout] = useState("default");

  // const onChange = (input: any) => {
  //   console.log('input', input)
  //   const latestLetter = input.slice(-1);
  //   console.log('latestLetter', latestLetter)
  //   const transliteratedButton = transliterateCharacter(latestLetter);
  //   setInput((prevInput: string) => prevInput + transliteratedButton);
  // };

  // const handleShift = () => {
  //   const newLayoutName = layout === "default" ? "shift" : "default";
  //   // setLayout(newLayoutName);
  // };

  // const onKeyPress = (button: any) => {
  //   console.log("Button pressed", button);

  //   /**
  //    * If you want to handle the shift and caps lock buttons
  //    */
  //   if (button === "{shift}" || button === "{lock}") handleShift();
  // };

  const overlayEnglishLayout: any = {
    "ੱ": "~",
    ਆ: "੧",
    ਇ: "੨",
    ਈ: "੩",
    ਉ: "੪",
    ਊ: "੫",
    ਏ: "੬",
    ਐ: "੭",
    ਔ: "੮",
    ਖ਼: "੯",
    ਫ਼: "0",
    "☬": "-",
    "+": "=",
    // ------
    ਤ: "Q",
    "ਾ": "W",
    ੲ: "E",
    ਰ: "R",
    ਟ: "T",
    "ੇ": "Y",
    "ੁ": "U",
    "ਿ": "I",
    "ੋ": "O",
    ਪ: "P",
    "{": "[",
    "}": "]",
    ਙ: "\\",
    // ------
    ਅ: "A",
    ਸ: "S",
    ਦ: "D",
    ਡ: "F",
    ਗ: "G",
    ਹ: "H",
    ਜ: "J",
    ਕ: "K",
    ਲ: "L",
    "'": "“",
    "ਃ": ";",
    // -------
    ਗ਼: "Z",
    ਣ: "X",
    ਚ: "C",
    ਵ: "V",
    ਬ: "B",
    ਨ: "N",
    ਮ: "M",
    ੴ: "<",
    "।": ">",
    "॥": "/",
  };
  const overlayCapitalGurmukhiLayout: any = {
    "ੱ": "`",
    ਤ: "ਥ",
    "ਾ": "ਾਂ",
    ੲ: "ਓ",
    ਰ: "੍ਰ",
    ਟ: "ਠ",
    "ੇ": "ੈ",
    "ੁ": "ੂ",
    "ਿ": "ੀ",
    "ੋ": "ੌ",
    ਪ: "ਫ",
    ਙ: "ਞ",
    // ------
    ਅ: "ੳ",
    ਸ: "ਸ਼",
    ਦ: "ਧ",
    ਡ: "ਢ",
    ਗ: "ਘ",
    ਹ: `੍ਹ`,
    ਜ: `ਝ`,
    ਕ: `ਖ`,
    ਲ: `ਲ਼`,
    // -------
    ਗ਼: "ਜ਼",
    ਣ: "ਯ",
    ਚ: "ਛ",
    ਵ: "ੜ",
    ਬ: "ਭ",
    ਨ: "ਂ",
    ਮ: "ੰ",
    ੴ: ",",
    "।": ".",
    "॥": "?",
  };

  const addOverlayLayout = ({ recurseButtons }: any) => {
    recurseButtons((button: any) => {
      const buttonLabel = button.getAttribute("data-skbtn"); //get button text
      const overlayEnglighButtonLabel = overlayEnglishLayout[buttonLabel]; //replace with english alphabet
      const overlayCapitalGurmukhiLabel =
        overlayCapitalGurmukhiLayout[buttonLabel]; //replace with shift gurmukhi letter

      if (overlayEnglighButtonLabel || overlayCapitalGurmukhiLabel) {
        let buttonElemArr = button;
        if (!Array.isArray(buttonElemArr)) {
          buttonElemArr = [buttonElemArr];
        }

        buttonElemArr.forEach((buttonElem: any) => {
          const enSpan = document.createElement("span");
          const gkSpan = document.createElement("span");
          enSpan.classList.add("enStyle");
          gkSpan.classList.add("gkStyle");

          enSpan.textContent = overlayEnglighButtonLabel;
          gkSpan.textContent = overlayCapitalGurmukhiLabel;

          buttonElem.appendChild(enSpan);
          buttonElem.appendChild(gkSpan);
        });
      }
    });
  };

  return (
    <>
      <div className="keyboardLayout">
        <Keyboard
          onRender={addOverlayLayout}
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layout}
          // onChange={onChange}
          syncInstanceInputs={true}
          physicalKeyboardHighlight={true}
          layout={{
            // default: [
            //   "{//} 1 2 3 4 5 6 7 8 9 0 - {//} {bksp}",
            //   "{tab} \u0A4C \u0A48 \u0A3E \u0A40 \u0A42 \u0A2C \u0A39 \u0A17 \u0A26 \u0A1C \u0A21 \u0A3C {//}",
            //   "{lock} \u0A4B \u0A47 \u0A4D \u0A3F \u0A41 \u0A2A \u0A30 \u0A15 \u0A24 \u0A1A \u0A1F {enter}",
            //   "{shift} {//} \u0A70 \u0A2E \u0A28 \u0A35 \u0A32 \u0A38 , . \u0A2F {shift}",
            //   ".com @ {space}"
            // ],
            // shift: [
            //   "\u0A4D\u0A39 \u0A4D\u0A35 \u0A4D\u0A2F \u0A4D\u0A30 \u0A71 {//} {//} {//} {//} ( ) {//} {//} {bksp}",
            //   "{tab} \u0A14 \u0A10 \u0A06 \u0A08 \u0A0A \u0A2D \u0A19 \u0A18 \u0A27 \u0A1D \u0A22 \u0A1E {//}",
            //   "{lock} \u0A13 \u0A0F \u0A05 \u0A07 \u0A09 \u0A2B \u0A5C \u0A16 \u0A25 \u0A1B \u0A20 {enter}",
            //   "{shift} {//} \u0A02 \u0A23  \u0A72 \u0A33 \u0A36 {//} \u0964 {//} {shift}",
            //   ".com @ {space}"
            // ],
            default: [
              "[ੱ] ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਔ ਖ਼ ਫ਼ [☬] [+] [bksp]",
              "{tab} ਤ [ਾ] ੲ ਰ ਟ [ੇ] [ੁ] [ਿ] [ੋ] ਪ [{] [}] ਙ",
              "{lock} ਅ ਸ ਦ ਡ ਗ ਹ ਜ ਕ ਲ [ਃ] ' enter",
              "{shift} ਗ਼ ਣ ਚ ਵ ਬ ਨ ਮ ੴ । ॥ {shift}",
              "ctrl alt {space} alt ctrl",
            ],
          }}
        />
      </div>
    </>
  );
};

export default GurmukhiKeyboard;
