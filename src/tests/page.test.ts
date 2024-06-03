import { describe, it, expect } from "vitest";
import { calculatePagesOne, calculatePagesTwo, divideBatches, fillBlanks } from "../page.utils";

describe("test fillBlanks", () => {
  // it("fillBlanks", () => {
  //   const result = fillBlanks(1, 16, 1);

  //   console.log(result);
  //   expect(3 + 5).toBe(8);
  // });

  // it("calculatePagesOne", () => {
  //   const filling = fillBlanks(1, 16, 1);
  //   const result = calculatePagesOne(filling);
  //   console.log(result);

  //   console.log(result);
  //   expect(3 + 5).toBe(8);
  // });

  it("calculatePagesOne", () => {
    const filling = fillBlanks(1, 16, 1);
    const r = calculatePagesTwo(filling);
    console.log(r);
  //  const divided =  divideBatches(filling, 16);

  //  divided.forEach((batch,index) => {
  //   const result = calculatePagesOne(batch);
  //   console.log('Batch #',index,result);
  //  });
   


    expect(3 + 5).toBe(8);
  });
});
