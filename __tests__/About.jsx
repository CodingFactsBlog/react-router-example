import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
import { AboutComponent } from "../src/SingleComponents.jsx";

describe("Tests the About component", () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <AboutComponent />,
        MountOptions
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    props = {};
    mountedComponent = undefined;
  });

  it("Always renders a div", () => {
    const divs = component().find("div");
    expect(divs.length).toBe(1);
  });

  it("Composition is correct", () => {
    const div = component().find("div").first();
    expect(div.find("h1").length).toBe(1);
    expect(div.find("p").length).toBeGreaterThan(0);
    expect(div.find("HomeLink").length).toBe(1);
  });
});
