/**
 * Splits an array into chunks of a specified size.
 * @param {T[]} array - The array to be split into chunks.
 * @param {number} chunk_size - The size of each chunk.
 * @returns {T[][]} An array of arrays, each containing elements of the original array split into chunks.
 * @template T
 * @example
 * // Returns [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 2);
 *
 * // Returns [['a', 'b', 'c'], ['d', 'e', 'f']]
 * chunk(['a', 'b', 'c', 'd', 'e', 'f'], 3);
 */
export const chunk = <T>(array: T[], chunk_size: number): T[][] => {
  return array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunk_size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, [] as T[][]);
};
