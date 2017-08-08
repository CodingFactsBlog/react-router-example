import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
import { HomeLink } from "../src/SingleComponents.jsx";

describe("Tests the HomeLink component", () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <HomeLink />,
        MountOptions
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    props = {};
    mountedComponent = undefined;
  });

  it("Always renders a p", () => {
    expect(component().find("p").length).toBe(1);
  });

  it("Has a link with text 'Back' pointing to '/'", () => {
    expect(component().find("Link").length).toBe(1);
    expect(component().find("Link").first().text()).toEqual("Back");
    expect(component().find("Link").first().props().to).toEqual("/");
  });
});
