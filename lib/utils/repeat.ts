/**
 * 生成重复次数的数组
 * @param count 重复次数
 * @param getElem 获取元素的函数
 * @param getSeparator 获取分隔符的函数
 * @returns 生成的数组
 * @example
 * ```typescript
 * repeat(3, () => 'a')
 * // ['a', 'a', 'a']
 *
 * repeat(3, i => `elem${i}`, i => `sep${i}`)
 * // ['elem0', 'sep0', 'elem1', 'sep1', 'elem2']
 * ```
 */
export function repeat<T>(count: number, getElem: (index: number) => T, getSeparator?: (leftIndex: number) => T): T[] {
	const result: T[] = []
	if (!getSeparator) {
		for (let i = 0; i < count; i++) {
			result.push(getElem(i))
		}
		return result
	}
	const maxIndex = count - 1
	for (let i = 0; i < maxIndex; i++) {
		result.push(getElem(i))
		result.push(getSeparator(i))
	}
	result.push(getElem(maxIndex))
	return result
}
