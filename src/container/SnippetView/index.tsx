import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { uriTransformer } from 'react-markdown'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'
import randomize from '../../data/snippet-gen'
import './index.css'
import Header from '../../components/Header'
import { useApiReducer } from '../../api'
import { SettingPickerContext } from '../../App'

export const MarkDownContext = React.createContext<{ snippet: string; category: string }>({
  snippet: '',
  category: '',
})

const SnippetView: React.FC = () => {
  const [snippetMeta, setSnippetMeta] = React.useState({ snippet: '', category: '' })
  const { getSetting } = React.useContext(SettingPickerContext)
  React.useEffect(() => {
    const doFetch = async () => {
      if (getSetting) {
        const setting = await getSetting()

        const randomSnippetPath = randomize(setting.selectedOptions)

        fetch(`${process.env.PUBLIC_URL}/assets/snippets/${randomSnippetPath}`)
          .then((res) => res.text())
          .then((text) => setSnippetMeta({ snippet: text, category: randomSnippetPath.split('/')[0] }))
      }
    }
    doFetch()
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
