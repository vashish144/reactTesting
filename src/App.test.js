import React from "react";
import { shallow } from "enzyme";
import App from "./App";

test("component is not-empty", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});
