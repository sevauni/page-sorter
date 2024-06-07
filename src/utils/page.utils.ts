const DEFAULT_DIVIDER = 4;

const elementsToAdd = (length: number, by: number): number =>
  (by - (length % by)) % by;

export const fillBlanks = (
  firstPage: number,
  lastPage: number,
  blankPage: number
): number[] => {
  const amount = lastPage - firstPage + 1;
  const sequence = Array(amount)
    .fill(0)
    .map((_, i) => i + firstPage);
  const resultingBatch = Math.min(amount, DEFAULT_DIVIDER);
  const additional = elementsToAdd(sequence.length, resultingBatch);
  return sequence.concat(Array(additional).fill(blankPage));
};

export const divideBatches = (
  pages: number[],
  batchSize: number
): number[][] => {
  if (batchSize >= pages.length) {
    return [pages];
  }

  const batches: number[][] = [];
  for (let i = 0; i < pages.length; i += batchSize) {
    batches.push(pages.slice(i, i + batchSize));
  }

  return batches;
};

export const calculatePagesOne = (
  pages: number[]
): {
  firstSide: number[];
  secondSide: number[];
} => {
  const firstSide: number[] = [];
  const secondSide: number[] = [];

  let pointerLeft = 0;
  let pointerRight = pages.length - 1;
  while (pointerLeft < pointerRight) {
    firstSide.push(pages[pointerRight]);
    firstSide.push(pages[pointerLeft]);
    secondSide.unshift(pages[pointerRight - 1]);
    secondSide.unshift(pages[pointerLeft + 1]);

    pointerLeft += 2;
    pointerRight -= 2;
  }

  return { firstSide, secondSide };
};

export const calculatePagesTwo = (
  pages: number[]
): {
  firstSide: number[];
} => {
  const firstSide: number[] = [];

  let pointerLeft = 0;
  let pointerRight = pages.length - 1;

  for (let index = 0; index < pages.length; index++) {
    if (index % 2) {
      firstSide.push(pages[pointerLeft]);
      firstSide.push(pages[pointerRight]);
    } else {
      firstSide.push(pages[pointerRight]);
      firstSide.push(pages[pointerLeft]);
    }

    pointerLeft += 1;
    pointerRight -= 1;
    if (pointerLeft >= pointerRight) {
      break;
    }
  }

  return { firstSide };
};
