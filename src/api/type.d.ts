type ApiReducerType = {
  loading: boolean
  data?: any
  error?: string
}

type ApiActionType = {
  type: 'loading' | 'success' | 'error'
  data?: any
  error?: string
}
