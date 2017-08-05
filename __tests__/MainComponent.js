import React from "react";
import { mount } from "enzyme";
import MainComponent from "../src/MainComponent.jsx";

describe("MainComponent", () => {
  let props;
  let mountedMainComponent;
  const mainComponent = () => {
    if (!mountedMainComponent) {
      mountedMainComponent = mount(
        <MainComponent {...props} />
      );
    }
    return mountedMainComponent;
  }

  beforeEach(() => {
    props = {
      number: undefined,
    };
    mountedMainComponent = undefined;
  });

  it("Always renders a div", () => {
    const divs = mainComponent().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("Has 4 children, an h1 and 3 RandomGenerators", () => {
    const children = mainComponent().find("div").first().children();
    expect(children.length).toBe(4);
    expect(children.find("h1").length).toBeGreaterThan(1);
    expect(children.find("RandomDoubleGenerator").length).toBe(1);
    expect(children.find("RandomIntegerGenerator").length).toBe(1);
    expect(children.find("RandomCharacterGenerator").length).toBe(1);
  });

  it ("Has an h1 with text 'Random Generator'", () => {
    expect(mainComponent().find("h1").first().text()).toBe("Random Generator");
  });
})
