/**
 * binarySearch01() – iteratively continues searching
 * 
 * @param list to search
 * @param item to look for
 * @returns the found `item`'s position or `null`
 */
export function binarySearch01(list: number[], item: number): number | null {
  let low = 0;
  let high = list.length - 1;
  let steps = 0; // kaç adım olduğunu hesaplamak için
  let middle = Math.floor((low + high) / 2);
  let guess = list[middle];
  while(low <= high) {
    middle = Math.floor((low + high) / 2); // bulana kadar ikiye böl
    guess = list[middle];
    console.log(`tahmin -> ${guess}`);
    if(guess === item) {
      steps++;
      console.log(`${steps} adımda bulundu!!`);
      return middle;
    }
    guess < item ? low = middle + 1 : high = middle - 1;
    steps++;
  }

  return null;
}