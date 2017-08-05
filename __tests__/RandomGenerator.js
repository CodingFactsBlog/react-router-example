import React from "react";
import { mount } from "enzyme";
import RandomGenerator from "../src/RandomGenerator.jsx";

expect.extend({
  toBeInRange(value, rangeMin, rangeMax) {
    const pass = rangeMin <= value && value <= rangeMax;
    if (pass) {
      return {
        message: () => `${value} is between ${rangeMin} and ${rangeMax}`,
        pass: true,
      };
    }
    return {
      message: () => `Expected ${value} to be between ${rangeMin} and ${rangeMax}`,
      pass: false,
    };
  }
});

describe("RandomGenerator", () => {
  let props;
  let mountedRandomGenerator;
  const randomGenerator = () => {
    if (!mountedRandomGenerator) {
      mountedRandomGenerator = mount(
        <RandomGenerator {...props} />
      );
    }
    return mountedRandomGenerator;
  }

  beforeEach(() => {
    props = {};
    mountedRandomGenerator = undefined;
  });

  it("It always renders a div", () => {
    const divs = randomGenerator().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Has a NumberLabel and a button as children", () => {
    expect(randomGenerator().find("div").first().children().length).toBe(2);
    expect(randomGenerator().find("NumberLabel").length).toBe(1);
    expect(randomGenerator().find("button").length).toBe(1);
  });

  it("Initial state is empty", () => {
    expect(randomGenerator().state()).toEqual({});
  });

  it("Clicking the button changes the state", () => {
    randomGenerator().find('button').simulate('click');
    expect(Object.keys(randomGenerator().state()).length).toBe(1);
    expect(randomGenerator().state("number")).toBeInRange(0, 1);
  });
});
