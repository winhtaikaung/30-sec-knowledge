import { META } from './meta'

const getShuffledArr = (arr: any[]): any[] => {
  if (arr.length === 1) {
    return arr
  }
  const rand = Math.floor(Math.random() * arr.length)
  return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i !== rand))]
}

var selectedItems = ['css', 'react', 'python', 'interview', 'javascript']
const snippets = getShuffledArr(
  Object.keys(META)
    .filter((item: any) => selectedItems.includes(item))
    // @ts-ignore
    .map((item: any) => META[item])
    .flatMap((item: any) => item),
)

function* snippetRandomizer(snippets: any[]) {
  yield snippets[Math.floor(Math.random() * snippets.length)]
}

const randomizeSnippets = () => snippetRandomizer(snippets).next().value
export default randomizeSnippets
