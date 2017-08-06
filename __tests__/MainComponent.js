import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
import MainComponent from "../src/MainComponent.jsx";

describe("MainComponent", () => {
  let props;
  let mountedMainComponent;
  const mainComponent = () => {
    if (!mountedMainComponent) {
      mountedMainComponent = mount(
        <MainComponent {...props} />,
        MountOptions,
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
    expect(divs.length).toBe(1);
  });

  it("Has 2 children, an h1 and one ul ", () => {
    const children = mainComponent().find("div").first().children();
    expect(children.length).toBe(2);
    expect(children.find("h1").length).toBe(1);
    expect(children.find("ul").length).toBe(1);
  });

  it ("Has an h1 with text 'Random Generator'", () => {
    expect(mainComponent().find("h1").first().text()).toBe("Random Generator");
  });
})
