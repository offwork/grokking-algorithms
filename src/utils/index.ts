/**
 * numSequence() – initializing array using without loop
 * 
 * @param n used to size the array
 * @returns a sequence of numbers like this `[1,2,3,4 ...]`
 */
export const numSequence = (n: number) => [...Array(n)].map((val, idx) => idx);
