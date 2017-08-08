import React from "react";
import { mount } from "enzyme";
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

  it("Goes to random double", () => {
    const link = component().find("Link").at(0);
    expect(link.props().to).toEqual("/random/double");
  });

  it("Goes to random integer", () => {
    const link = component().find("Link").at(1);
    expect(link.props().to).toEqual("/random/integer");
  });

  it("Goes to random character", () => {
    const link = component().find("Link").at(2);
    expect(link.props().to).toEqual("/random/character");
  });

  it("Goes to echo", () => {
    const link = component().find("Link").at(3);
    expect(link.props().to).toEqual("/echo/This_is_an_example_text");
  });

  it("Goes to about", () => {
    const link = component().find("Link").at(4);
    expect(link.props().to).toEqual("/about");
  });
})
