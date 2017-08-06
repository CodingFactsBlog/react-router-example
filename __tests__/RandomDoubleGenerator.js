import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
import RandomDoubleGenerator from "../src/RandomGenerators/RandomDoubleGenerator.jsx";

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

describe("RandomDoubleGenerator", () => {
  let props;
  let mountedRandomDoubleGenerator;
  const randomDoubleGenerator = () => {
    if (!mountedRandomDoubleGenerator) {
      mountedRandomDoubleGenerator = mount(
        <RandomDoubleGenerator {...props} />,
        MountOptions,
      );
    }
    return mountedRandomDoubleGenerator;
  }

  beforeEach(() => {
    props = {};
    mountedRandomDoubleGenerator = undefined;
  });

  it("It always renders a div", () => {
    const divs = randomDoubleGenerator().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Has a h1, a p, a NumberLabel, a button and a HomeLink as children", () => {
    expect(randomDoubleGenerator().find("div").first().children().length).toBe(5);
    expect(randomDoubleGenerator().find("h1").length).toBe(1);
    expect(randomDoubleGenerator().find("p").length).toBeGreaterThan(1);
    expect(randomDoubleGenerator().find("ValueLabel").length).toBe(1);
    expect(randomDoubleGenerator().find("button").length).toBe(1);
    expect(randomDoubleGenerator().find("HomeLink").length).toBe(1);
  });

  it("Initial state is empty", () => {
    expect(randomDoubleGenerator().state()).toEqual({});
  });

  it("Clicking the button changes the state", () => {
    randomDoubleGenerator().find('button').simulate('click');
    expect(Object.keys(randomDoubleGenerator().state()).length).toBe(1);
    expect(randomDoubleGenerator().state("number")).toBeInRange(0, 1);
  });
});
