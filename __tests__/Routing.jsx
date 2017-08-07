import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
import MainComponent from "../src/MainComponent.jsx";
import RouterComponent from "../src/RouterComponent.jsx";

describe("Tests the routing of the app", () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <div>
          <RouterComponent>
          <MainComponent {...props} />
          </RouterComponent>
        </div>
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
    expect(divs.length).toBeGreaterThan(1);
  });
  
  it("renders Links", () => {
    const links = component().find("Link");
    expect(links.length).toBe(5);
  });
})
