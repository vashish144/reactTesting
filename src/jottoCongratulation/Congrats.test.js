import React from "react";
import { shallow } from "enzyme";
import { checkProp, findByTestAttr } from "../../test/testUtils";

import Congrats from "./Congrats";

const defaultProps = {
  success: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  // console.log("setupProps", setupProps);
  return shallow(<Congrats {...setupProps} />);
};

test("render without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("render no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("render non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  //   console.log(message.debug());
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProp(Congrats, expectedProps);
});
