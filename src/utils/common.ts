export const getInitials = (name: any) => {
  if (name) {
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return initials;
  }
};
export const getFirstLetter = (name: any) => {
  if (name) {
    const firstLetter = name.charAt(0).toUpperCase();
    return firstLetter;
  }
};
export const queryToJsonObject = () => {
  const params = new URLSearchParams(window.location.search);

  const parsedObject: any = {};

  for (const [key, value] of params?.entries()) {
    parsedObject[key] = value;
  }

  return parsedObject;
};
