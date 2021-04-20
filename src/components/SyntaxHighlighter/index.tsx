import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'
import CodePenRenderer from './CodePenRenderer'
import { validURL } from '../../utils/string'

const component: any = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <>
        <SyntaxHighlighter
          style={xonokai}
          language={match[1]}
          PreTag="div"
          customStyle={{
            backgroundColor: 'var(--bg__code--block)',
            border: `1px solid var(--bg__code--block)`,
            boxShadow: 'none',
            borderRadius: `3px`,
          }}
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
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

export default component
