import { numSequence } from './utils';
import { binarySearch01, binarySearch02 } from './01-binary-search';

const num16 = numSequence(16);
// log2 (16) = 4 (max adım sayısı)
const simpleBinarySearch = binarySearch01(num16, 12);
// konum 0'dan başlar --> tahmin - 1 = konum
console.log(simpleBinarySearch);

const recursiveBinarySearch = binarySearch02(
  num16,
  4,
  0,
  num16.length - 1
);

console.log(recursiveBinarySearch);