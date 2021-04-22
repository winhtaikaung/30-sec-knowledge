import * as React from 'react'

const API = async (url: string, abortSignal: AbortSignal) => {
  const response = await fetch(url, { signal: abortSignal })
  return response.text()
}

export const useApiReducer = (url: string) => {
  const initialState = { loading: true, data: null }

  const reducer = (state: ApiReducerType = initialState, action: ApiActionType): ApiReducerType => {
    switch (action.type) {
      case 'loading':
        return { ...state, loading: true, data: null }
      case 'success':
        return { ...state, loading: false, data: action.data }
      case 'error':
        return { ...state, loading: false, error: action.error }
      default:
        return initialState
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    let mounted = true

    const fetchData = async () => {
      dispatch({ type: 'loading' })
      try {
        const data = await API(url, signal)

        dispatch({ type: 'success', data: data })
      } catch (e) {
        dispatch({ type: 'error', error: e.toString() })
      }
    }

    if (mounted) {
      fetchData()
    }

    return () => {
      mounted = false
      controller.abort()
    }
  }, [url])

  return state
}
