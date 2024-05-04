import { Rule } from "antd/es/form";

export const defaultRule: Rule = { required: true, min: 1, type: "number" };
export const lastPageRule: Rule = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("firstPage") < value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(
        "The number of the last page cannot be less than the number of the first one."
      )
    );
  },
});

export const bunchValidator: Rule = () => ({
  validator(_, value) {
    return !!(value % 4)
      ? Promise.reject(
          new Error("The number of pages in a bunch must be a multiple of 4")
        )
      : Promise.resolve();
  },
});