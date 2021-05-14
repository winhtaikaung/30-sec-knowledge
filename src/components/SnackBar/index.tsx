import * as React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
const SnackBar: React.FC<{ message: React.ReactNode; container: Node; root?: Node }> = ({
  message,
  container,
  root,
}) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (root) {
        root.removeChild(container)
      }
    }, 2000)
  }, [root, container])
  return (
    <>
      <div id="snackbar" className={'show'}>
        {message}
      </div>
    </>
  )
}

const SnackBarMessage = (message: string) => {
  const container = document.createElement('div')
  const app = document.getElementById('snippetView')
  ReactDOM.render(
    ReactDOM.createPortal(<SnackBar message={message} container={container} root={app} />, app?.appendChild(container)),
    container,
  )
}

export default SnackBarMessage
