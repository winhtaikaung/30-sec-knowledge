export const validURL = (str: string) => {
  const regEx =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/gm
  return regEx.test(str)
}

export const UpperFirst = (text: string) => {
  return ''.concat(text.slice(0, 1).toUpperCase(), text.slice(1, text.length))
}
