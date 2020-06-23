/**
 * binarySearch02() – recursively continues searching
 * 
 * @param list to search
 * @param item to look for
 * @param low min range value
 * @param high max range value
 * @returns the found `item`'s position or `-1`
 */
export function binarySearch02(list: number[], item: number, low: number, high: number): number {
  if(low > high) return -1;
  const middle = Math.floor((low + high) / 2);
  console.log(`tahmin -> ${middle}`)
  if(list[middle] === item) return middle;
  return list[middle] > item ? 
    binarySearch02(list, item, low, middle - 1) : 
    binarySearch02(list, item, middle + 1, high);
}