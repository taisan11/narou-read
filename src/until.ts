export function isValidNcode(str:string):boolean {
    // 正規表現パターン: 任意の数の数字(\d*)、その後に四桁の数字(\d{4})、そして最後に二文字の英字([a-zA-Z]{2})
    const pattern = /^n\d{4}[a-zA-Z]{2}$/;
    
    return pattern.test(str);
}
// By Hono
const resolvedPromiseValueMap: WeakMap<Promise<unknown>, unknown> = new WeakMap<
  Promise<unknown>,
  unknown
>()
export const use = <T>(promise: Promise<T>): T => {
    const cachedRes = resolvedPromiseValueMap.get(promise) as [T] | [undefined, unknown] | undefined
    if (cachedRes) {
      if (cachedRes.length === 2) {
        throw cachedRes[1]
      }
      return cachedRes[0] as T
    }
    promise.then(
      (res) => resolvedPromiseValueMap.set(promise, [res]),
      (e) => resolvedPromiseValueMap.set(promise, [undefined, e])
    )
  
    const buildData = buildDataStack.at(-1) as [unknown, NodeObject]
    if (!buildData) {
      throw promise
    }
    const [, node] = buildData
  
    const promiseArray = (node[DOM_STASH][1][STASH_USE] ||= [])
    const hookIndex = node[DOM_STASH][0]++
  
    promise.then(
      (res) => {
        promiseArray[hookIndex] = [res]
      },
      (e) => {
        promiseArray[hookIndex] = [undefined, e]
      }
    )
  
    const res = promiseArray[hookIndex]
    if (res) {
      if (res.length === 2) {
        throw res[1]
      }
      return res[0] as T
    }
  
    throw promise
  }
  