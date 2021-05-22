import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { uriTransformer } from 'react-markdown'
import SyntaxHighlighter from '../../components/SyntaxHighlighter'
import randomize from '../../data/snippet-gen'
import './index.css'
import Header from '../../components/Header'

import { SettingPickerContext } from '../../App'
import { RangeScale } from '../../components/OptionRange'

export const MarkDownContext = React.createContext<{ snippet: string; category: string }>({
  snippet: '',
  category: '',
})

const SnippetView: React.FC<{ timestamp: string }> = ({ timestamp }) => {
  const [snippetMeta, setSnippetMeta] = React.useState({ snippet: '', category: '' })
  const { getSetting, setting } = React.useContext(SettingPickerContext)
  React.useEffect(() => {
    if (getSetting) {
      const doFetch = async () => {
        const setting = await getSetting()

        const randomSnippetPath = randomize(setting.selectedOptions)
        if (!process.env.REACT_APP_API_HOST) {
          fetch(`${process.env.PUBLIC_URL}/assets/snippets/${randomSnippetPath}`)
            .then((res) => res.text())
            .then((text) => setSnippetMeta({ snippet: text, category: randomSnippetPath.split('/')[0] }))
        } else {
          fetch(`${process.env.REACT_APP_API_HOST}/assets/snippets/${randomSnippetPath}`)
            .then((res) => res.text())
            .then((text) => setSnippetMeta({ snippet: text, category: randomSnippetPath.split('/')[0] }))
        }
      }
      doFetch()
    }
    // eslint-disable-next-line
  }, [timestamp])

  return (
    <>
      <MarkDownContext.Provider
        value={{
          snippet: snippetMeta.snippet,
          category: snippetMeta.category,
        }}
      >
        <div
          id="snippetView"
          //@ts-ignore
          className={`font-size-${(RangeScale[setting.fontSize as any].size as string).toLowerCase()} `}
        >
          <Header />
          <div className="markdown-renderer">
            <ReactMarkdown
              transformLinkUri={uriTransformer}
              skipHtml={true}
              className={setting.theme}
              components={SyntaxHighlighter}
            >
              {snippetMeta.snippet}
            </ReactMarkdown>
          </div>
        </div>
      </MarkDownContext.Provider>
    </>
  )
}
export default SnippetView
