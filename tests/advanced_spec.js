// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("hould return true for an xml with multiple top level nodes, each with a child node different ", () => {
    expect(isValidXML("<a><d/></a><b><d/></b><c><d/></c>")).toBeTruthy();
  });

  it("hould return true for an xml with multiple top level nodes, each with child nodes with unique tags ", () => {
    expect(
      isValidXML("<a><d/><e/></a><b><e/><d/></b><c><d/><e/></c>")
    ).toBeTruthy();
  });

  it("hould return false for an xml with child nodes, one of which has same tag as its parent ", () => {
    expect(isValidXML("<a><d/><a/></a>")).toBeFalsy();
  });
});
