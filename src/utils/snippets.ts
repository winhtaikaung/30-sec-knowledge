export const SNIPPET_CODE_REGEX: { html: RegExp; css: RegExp; js: RegExp } = {
  html: new RegExp(/(?:```html)(?:\s*)([\s\S.]*?)(?=```)/, 'gm'),
  css: new RegExp(/(?:```css)(?:\s*)([\s\S.]*?)(?=```)/, 'gm'),
  js: new RegExp(/(?:```js)(?:\s*)([\s\S.]*?)(?=```)/, 'gm'),
}

export const extractCodeFromSnippet = (source: string, lang: 'html' | 'css' | 'js') => {
  const CODE_REGEX: RegExp = SNIPPET_CODE_REGEX[lang]

  const codes = CODE_REGEX.exec(source)
  // The code is in the first capturing group so use codes[1]
  const result = codes && codes.length ? codes[1] : ''

  return result
}

export const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  // @ts-ignore
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    //@ts-ignore
    document?.getSelection().removeAllRanges()
    // @ts-ignore
    document?.getSelection().addRange(selected)
  }
}
