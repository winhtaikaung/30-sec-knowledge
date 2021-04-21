import { META } from './meta'

export const getOptions = () => Object.keys(META).map((item) => item.toLowerCase())
