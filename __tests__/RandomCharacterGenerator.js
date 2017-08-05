import React from "react";
import { mount } from "enzyme";
import RandomCharacterGenerator from "../src/RandomGenerators/RandomCharacterGenerator.jsx";

describe("RandomCharacterGenerator", () => {
  let props;
  let mountedRandomCharacterGenerator;
  const randomCharacterGenerator = () => {
    if (!mountedRandomCharacterGenerator) {
      mountedRandomCharacterGenerator = mount(
        <RandomCharacterGenerator {...props} />
      );
    }
    return mountedRandomCharacterGenerator;
  }

  beforeEach(() => {
    props = {};
    mountedRandomCharacterGenerator = undefined;
  });

  it("It always renders a div", () => {
    const divs = randomCharacterGenerator().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Has a h1, a p, a NumberLabel and a button as children", () => {
    expect(randomCharacterGenerator().find("div").first().children().length).toBe(4);
    expect(randomCharacterGenerator().find("h1").length).toBe(1);
    expect(randomCharacterGenerator().find("p").length).toBeGreaterThan(1);
    expect(randomCharacterGenerator().find("ValueLabel").length).toBe(1);
    expect(randomCharacterGenerator().find("button").length).toBe(1);
  });

  it("Initial state is empty", () => {
    expect(randomCharacterGenerator().state()).toEqual({});
  });

  it("Clicking the button changes the state", () => {
    randomCharacterGenerator().find('button').simulate('click');
    expect(Object.keys(randomCharacterGenerator().state()).length).toBe(1);
    expect(randomCharacterGenerator().state("character").toString().length).toBe(1);
    expect(randomCharacterGenerator().state("character").toString()).toEqual(expect.stringMatching(/^[a-zA-Z]$/));
  });
});
