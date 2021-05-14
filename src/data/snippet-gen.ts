import { META } from './meta'

const getShuffledArr = (arr: any[]): any[] => {
  if (arr.length === 1) {
    return arr
  }
  const rand = Math.floor(Math.random() * arr.length)
  return [arr[rand], ...getShuffledArr(arr.filter((_, i) => i !== rand))]
}

const snippets = (selectedItems: string[]) => {
  if (selectedItems.length === 0) {
    return getShuffledArr(
      Object.keys(META)
        // @ts-ignore
        .map((item: any) => META[item])
        .flatMap((item: any) => item),
    )
  } else {
    return getShuffledArr(
      Object.keys(META)
        .filter((item: any) => selectedItems.includes(item))
        // @ts-ignore
        .map((item: any) => META[item])
        .flatMap((item: any) => item),
    )
  }
}

function snippetRandomizer(snippets: any[]) {
  return snippets[Math.floor(Math.random() * snippets.length)]
}

const randomizeSnippets = (selectedOptions: string[]) => {
  return snippetRandomizer(snippets(selectedOptions))
}
export default randomizeSnippets
