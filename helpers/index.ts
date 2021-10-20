export function deleteKeys(obj = {} as object, keys = [] as string[]): object {
  if (!keys.length) return {}
  const copyObj = { ...obj } as any
  for (const [key] of Object.entries(copyObj)) {
    if (keys.includes(key)) {
      delete copyObj[key]
    }
  }
  return copyObj
}
