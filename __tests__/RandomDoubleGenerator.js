import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
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

describe("Random Double Generator", () => {
  let props;
  let mountedRandomGenerator;
  const randomGenerator = () => {
    if (!mountedRandomGenerator) {
      mountedRandomGenerator = mount(
        <RandomGenerator {...props} />,
        MountOptions,
      );
    }
    return mountedRandomGenerator;
  }

  beforeEach(() => {
    props = { match: { params: {type: 'double' } } };
    mountedRandomGenerator = undefined;
  });

  it("It always renders a div", () => {
    const divs = randomGenerator().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Has a h1, a p, a NumberLabel, a button and a HomeLink as children", () => {
    expect(randomGenerator().find("div").first().children().length).toBe(5);
    expect(randomGenerator().find("h1").length).toBe(1);
    expect(randomGenerator().find("p").length).toBeGreaterThan(1);
    expect(randomGenerator().find("ValueLabel").length).toBe(1);
    expect(randomGenerator().find("button").length).toBe(1);
    expect(randomGenerator().find("HomeLink").length).toBe(1);
  });

  it("Initial state is empty", () => {
    expect(randomGenerator().state()).toEqual({});
  });

  it("Clicking the button changes the state", () => {
    randomGenerator().find('button').simulate('click');
    expect(Object.keys(randomGenerator().state()).length).toBe(1);
    expect(randomGenerator().state("value")).toBeInRange(0, 1);
  });
});
