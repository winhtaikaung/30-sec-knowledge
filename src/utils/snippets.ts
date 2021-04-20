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
