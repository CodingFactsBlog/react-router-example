import React from "react";
import { mount } from "enzyme";
import { MountOptions } from '../test-utils/MountOptions.jsx';
import { EchoComponent } from "../src/SingleComponents.jsx";

describe("Tests the Echo component", () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <EchoComponent {...props} />,
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
    expect(div.find("pre").length).toBe(1);
    expect(div.find("HomeLink").length).toBe(1);
  });

  it("Pre shows '' when no parameter is defined", () => {
    expect(component().find("pre").first().text()).toEqual("");
  });

  it("Pre shows 'Sample_text' when parameter is defined", () => {
    props = { match: { params: {value: 'Sample_text' } } };
    expect(component().find("pre").first().text()).toEqual("Sample_text");
  });
});

/*

<h1>Echo</h1>
<p>This page just echoes the value it receives in the URL. Change the value and submit the page to see the change.</p>
<pre style={{ border: '1px solid black', padding: '0.1em' }}>{matcher.match.params.value}</pre>
<HomeLink />

*/
