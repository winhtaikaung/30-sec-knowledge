//@ts-ignore
export const browserObject = chrome ? chrome : browser

export const SETTING_STORAGE = 'setting_storage'

export const setStorage = (key: string, value: any) => {
  const setOptions = new Promise((resolve, reject) => {
    browserObject.storage.sync.set({ [key]: value }, () => {
      if (browserObject.runtime.lastError) reject(null)

      resolve(true)
    })
  })

  return setOptions
}

export const createDefaultOptions = (options: any) => {
  return { settings: options }
}

export const getStorage = (key: string) => {
  const getOptions = new Promise((resolve, reject) => {
    browserObject.storage.sync.get([key], (options: any) => {
      if (browserObject.runtime.lastError) {
        reject(null)
      }

      resolve(options)
    })
  })

  return getOptions
}
