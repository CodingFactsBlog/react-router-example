import React from "react";
import { mount } from "enzyme";
import RandomIntegerGenerator from "../src/RandomGenerators/RandomIntegerGenerator.jsx";

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

describe("RandomIntegerGenerator", () => {
  let props;
  let mountedRandomIntegerGenerator;
  const randomIntegerGenerator = () => {
    if (!mountedRandomIntegerGenerator) {
      mountedRandomIntegerGenerator = mount(
        <RandomIntegerGenerator {...props} />
      );
    }
    return mountedRandomIntegerGenerator;
  }

  beforeEach(() => {
    props = {};
    mountedRandomIntegerGenerator = undefined;
  });

  it("It always renders a div", () => {
    const divs = randomIntegerGenerator().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Has a h1, a p, a NumberLabel and a button as children", () => {
    expect(randomIntegerGenerator().find("div").first().children().length).toBe(4);
    expect(randomIntegerGenerator().find("h1").length).toBe(1);
    expect(randomIntegerGenerator().find("p").length).toBeGreaterThan(1);
    expect(randomIntegerGenerator().find("ValueLabel").length).toBe(1);
    expect(randomIntegerGenerator().find("button").length).toBe(1);
  });

  it("Initial state is empty", () => {
    expect(randomIntegerGenerator().state()).toEqual({});
  });

  it("Clicking the button changes the state", () => {
    randomIntegerGenerator().find('button').simulate('click');
    expect(Object.keys(randomIntegerGenerator().state()).length).toBe(1);
    expect(randomIntegerGenerator().state("number")).toBeInRange(1, 1000);
  });
});
