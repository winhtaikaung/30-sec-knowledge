import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { uriTransformer } from 'react-markdown'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'
import randomize from '../../data/snippet-gen'
import './index.css'
import Header from '../../components/Header'

export const MarkDownContext = React.createContext<{ snippet: string; category: string }>({
  snippet: '',
  category: '',
})

const SnippetView: React.FC = () => {
  const [snippetMeta, setSnippetMeta] = React.useState({ snippet: '', category: '' })

  React.useEffect(() => {
    const randomSnippetPath = randomize()

    fetch(`${process.env.PUBLIC_URL}/assets/snippets/${randomSnippetPath}`)
      .then((res) => res.text())
      .then((text) => setSnippetMeta({ snippet: text, category: randomSnippetPath.split('/')[0] }))
  }, [])

  return (
    <>
      <MarkDownContext.Provider
        value={{
          snippet: snippetMeta.snippet,
          category: snippetMeta.category,
        }}
      >
        <Header />
        <div className="markdown-renderer">
          <ReactMarkdown transformLinkUri={uriTransformer} skipHtml={true} components={SyntaxHighlighter}>
            {snippetMeta.snippet}
          </ReactMarkdown>
        </div>
      </MarkDownContext.Provider>
    </>
  )
}
export default SnippetView
