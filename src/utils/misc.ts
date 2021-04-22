export const isEmpty = (obj: any) => {
    if (!obj) {
      return true
    }
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false
      }
    }
    return JSON.stringify(obj) === JSON.stringify({})
  }