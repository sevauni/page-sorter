const DEFAULT_DIVIDER = 4;

export const toSortPages = (
  pagesInPart: number,
  firstPageInPart: number,
  maxPage: number,
  blankPage: number
): [string, string] => {
  let lastPageInPart = firstPageInPart + pagesInPart - 1; // second page in the bundle
  let firstPageDelta = 0; // offset from the first page
  let lastPageDelta = 0; // offset from the last page
  let pagesString = ""; // string with sorted pages
  let firstPageInPartS2 = firstPageInPart + pagesInPart / 2 - 1; // second side
  let lastPageInPartS2 = firstPageInPart + pagesInPart / 2;
  let firstPageDeltaS2 = 0;
  let lastPageDeltaS2 = 0;
  let pagesStringS2 = "";

  const listsInPart = pagesInPart / 4; // sheets in the bundle
  let tempPage: number;

  for (let j = 0; j < listsInPart; j += 1) {
    // first side
    tempPage = lastPageInPart + lastPageDelta;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesString += tempPage + ",";

    tempPage = firstPageInPart + firstPageDelta;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesString += tempPage + ",";

    lastPageDelta -= 2;
    firstPageDelta += 2;

    // second side
    tempPage = firstPageInPartS2 + firstPageDeltaS2;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesStringS2 += tempPage + ",";

    tempPage = lastPageInPartS2 + lastPageDeltaS2;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesStringS2 += tempPage + ",";

    firstPageDeltaS2 -= 2;
    lastPageDeltaS2 += 2;
  }

  pagesString = pagesString.slice(0, -1);
  pagesStringS2 = pagesStringS2.slice(0, -1);

  return [pagesString, pagesStringS2];
};

export const toSortPagesDoubleSide = (
  pagesInPart: number,
  firstPageInPart: number,
  maxPage: number,
  blankPage: number
): string[] => {
  let lastPageInPart: number = firstPageInPart + pagesInPart - 1, // Second page in the part
    firstPageDelta: number = 0, // Offset from the first page
    lastPageDelta: number = 0, // Offset from the last page
    pagesString: string = "", // String with sorted pages
    listsInPart: number = pagesInPart / 4, // Sheets in the part
    j: number,
    tempPage: number;

  for (j = 0; j < listsInPart; j += 1) {
    // First side
    tempPage = lastPageInPart + lastPageDelta;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesString += tempPage + ",";

    tempPage = firstPageInPart + firstPageDelta;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesString += tempPage + ",";

    tempPage = firstPageInPart + firstPageDelta + 1;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesString += tempPage + ",";

    tempPage = lastPageInPart + lastPageDelta - 1;
    tempPage = maxPage && tempPage > maxPage ? blankPage : tempPage;
    pagesString += tempPage + ",";

    lastPageDelta -= 2;
    firstPageDelta += 2;
  }
  pagesString = pagesString.slice(0, -1);

  return [pagesString];
};

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
