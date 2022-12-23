import React from "react";
import { shallow } from "enzyme";
import { checkProp, findByTestAttr } from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};
describe("if there are no word guessed", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("render withoud error", () => {
    const component = findByTestAttr(wrapper, "component-guess");
    expect(component.length).toBe(1);
  });
  test("render instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instruction");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are word guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeAll(() => {
    wrapper = setup({ guessedWords });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-guess");
    expect(component.length).toBe(1);
  });
  test('renders "guessed word" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsNode.length).toBe(1);
  });
  test("correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});

test("does not throw warning with expected props", () => {
  checkProp(GuessedWords, defaultProps);
});
