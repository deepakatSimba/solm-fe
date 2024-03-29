export const Transliterate = (char: any) => {
  const transliterationMap: any = {
    "`": "`",
    "1": "੧",
    "2": "੨",
    "3": "੩",
    "4": "੪",
    "5": "੫",
    "6": "੬",
    "7": "੭",
    "8": "੮",
    "9": "੯",
    "0": "0",
    "-": "-",
    "=": "=",
    // -----
    a: "ਅ",
    s: "ਸ",
    d: "ਦ",
    f: "ਡ",
    g: "ਗ",
    h: "ਹ",
    j: "ਜ",
    k: "ਕ",
    l: "ਲ",
    ";": "ਃ",
    // -----
    q: "ਤ",
    w: "ਾ",
    e: "ੲ",
    r: "ਰ",
    t: "ਟ",
    y: "ੇ",
    u: "ੁ",
    i: "ਿ",
    o: "ੋ",
    p: "ਪ",
    "[": "{",
    "]": "}",
    "\\": "ਙ",
    // -----
    z: "ਗ਼",
    x: "ਣ",
    c: "ਚ",
    v: "ਵ",
    b: "ਬ",
    n: "ਨ",
    m: "ਮ",
    ",": "ੴ",
    ".": "।",
    "/": "॥",

    // -------shift letters
    "~": "ੱ",
    "!": "ਆ",
    "@": "ਇ",
    "#": "ਈ",
    $: "ਉ",
    "%": "ਊ",
    "^": "ਏ",
    "&": "ਐ",
    "*": "ਔ",
    "(": "ਖ਼",
    ")": "ਫ਼",
    _: "☬",
    "+": "+",
    // ------
    A: "ੳ",
    S: "ਸ਼",
    D: "ਧ",
    F: "ਢ",
    G: "ਘ",
    H: `੍ਹ`,
    J: `ਝ`,
    K: `ਖ`,
    L: `ਲ਼`,
    ":": ";",
    // -----
    Q: "ਥ",
    W: "ਾਂ",
    E: "ਓ",
    R: "੍ਰ",
    T: "ਠ",
    Y: "ੈ",
    U: "ੂ",
    I: "ੀ",
    O: "ੌ",
    P: "ਫ",
    "{": "[",
    "}": "]",
    "|": "ਞ",
    Z: "ਜ਼",
    X: "ਯ",
    C: "ਛ",
    V: "ੜ",
    B: "ਭ",
    N: "ਂ",
    M: "ੰ",
    "<": ",",
    ">": ".",
    // meta letters
    Meta: " ",
    CapsLock: " ",
    Escape: " ",
    Backspace: " ",
    Enter: " ",
    ArrowLeft: " ",
    ArrowRight: " ",
    ArrowDown: " ",
    ArrowUp: " ",
    Alt: " ",
    Control: " ",
    Tab: " ",
  };

  return transliterationMap[char] || char; //replace alphabets with gK letters
};
