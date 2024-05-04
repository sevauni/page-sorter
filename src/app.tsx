import { useState } from "preact/hooks";

import "./app.scss";
import {
  Button,
  Flex,
  Form,
  FormProps,
  InputNumber,
  Layout,
  Radio,
} from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Rule } from "antd/es/form";
import { toSortPages, toSortPagesDoubleSide } from "./page.utils";
import {
  defaultRule,
  lastPageRule,
  bunchValidator,
} from "./form-validators.utils";

type PageTypes = {
  firstPage: number;
  lastPage: number;
  inBunch: number;
  emptyPage: number;
  type: "oneSide" | "twoSide";
};

export const computePages = (values: PageTypes) => {
  // return values.type === "oneSide"
  //   ? toSortPages(inBunch, firstPage, lastPage, emptyPage)
  //   : toSortPagesDoubleSide(inBunch, firstPage, lastPage, emptyPage);
  const r = divideAndProcess(values);
return r;
};

export const divideAndProcess = (values: PageTypes): string[][] => {
  const { inBunch, firstPage, lastPage, emptyPage } = values;
  const pagesAmount = lastPage - firstPage + 1;

  // const result: [string, string][] = [];
  // for (let index = 1; index < pagesAmount + 1; index + inBunch) {
  //   const bun = toSortPages(inBunch, firstPage, lastPage, emptyPage);
  //   result.push(bun);
  // }
  // return result;
};

const onFinish: FormProps<PageTypes>["onFinish"] = (values: PageTypes) => {
  console.log("Success:", values);

  const result = computePages(values);
  console.log(result);
};

export function App() {
  return (
    <>
      <Layout
        style={{
          height: "100%",
        }}
      >
        <Header>Page sorter</Header>
        <Content>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<PageTypes>
              label="First Page"
              name="firstPage"
              initialValue={1}
              rules={[defaultRule]}
            >
              <InputNumber min={1}></InputNumber>
            </Form.Item>
            <Form.Item<PageTypes>
              label="lastPage"
              name="lastPage"
              initialValue={16}
              rules={[defaultRule, lastPageRule]}
            >
              <InputNumber min={1}></InputNumber>
            </Form.Item>
            <Form.Item<PageTypes>
              label="inBunch"
              name="inBunch"
              initialValue={16}
              rules={[defaultRule, bunchValidator]}
            >
              <InputNumber min={1}></InputNumber>
            </Form.Item>
            <Form.Item<PageTypes>
              label="emptyPage"
              name="emptyPage"
              initialValue={1}
              rules={[defaultRule]}
            >
              <InputNumber min={1}></InputNumber>
            </Form.Item>
            <Form.Item<PageTypes>
              label="type"
              name="type"
              initialValue={"oneSide"}
            >
              <Radio.Group defaultValue="oneSide" buttonStyle="solid">
                <Radio.Button value="oneSide">oneSide</Radio.Button>
                <Radio.Button value="twoSide">twoSide</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item<PageTypes>>
              <Flex width={"100%"} justify="center" align="center">
                <Button type="primary" htmlType="submit">
                  Calculate
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </Content>
        <Footer>2024</Footer>
      </Layout>
    </>
  );
}
