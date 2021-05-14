import reactSyntaxHighlighter, { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { dracula, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodePenRenderer from './CodePenRenderer'
import { validURL } from '../../utils/string'
import CopyButton from '../CopyButton'
import { copyToClipboard } from '../../utils/snippets'
import SnackBar from '../SnackBar'
import { useContext } from 'react'
import { SettingPickerContext } from '../../App'

const HightlighterRenderer: React.FC<{ match: any[]; props: any; children: string }> = ({ match, props, children }) => {
  const { setting } = useContext(SettingPickerContext)
  return (
    <>
      <SyntaxHighlighter
        style={setting.theme === 'dark' ? dracula : solarizedlight}
        language={match[1]}
        PreTag="div"
        customStyle={{
          border: `1px solid var(--bg__code--block)`,
          boxShadow: 'none',
          borderRadius: `3px`,
        }}
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
      <CopyButton
        onClick={(e) => {
          copyToClipboard(children)
          SnackBar('Copied to ClipBoard')
        }}
      />
    </>
  )
}

const Component: any = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')

    return !inline && match ? (
      <>
        <HightlighterRenderer children={children} match={match} props={props} />
      </>
    ) : (
      <>
        <code className={className} {...props} />
      </>
    )
  },
  h4: ({ node, children }: any) => {
    return <CodePenRenderer value={node.children[0].value}>{children}</CodePenRenderer>
  },
  li: ({ children }: any) => (
    <li>
      {validURL(children[0]) && (
        <a href={children[0]} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
      {!validURL(children[0]) && children}
    </li>
  ),
}

export default Component
