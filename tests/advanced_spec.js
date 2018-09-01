// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("should return true for an xml with multiple top level nodes, each with a child node different", () => {
    expect(isValidXML("<a><d/></a><b><d/></b><c><d/></c>")).toBeTruthy();
  });

  it("should return true for an xml with multiple top level nodes, each with child nodes with unique tags", () => {
    expect(
      isValidXML("<a><d/><e/></a><b><e/><d/></b><c><d/><e/></c>")
    ).toBeTruthy();
  });

  it("should return false for an empty string", () => {
    expect(isValidXML("")).toBeFalsy();
  });

  it("should return false for an random string", () => {
    expect(isValidXML("dsaf{{L<PL<KLLL@!#12")).toBeFalsy();
  });

  it("should return false for non-string input", () => {
    expect(isValidXML(123)).toBeFalsy();
    expect(isValidXML(123.1)).toBeFalsy();
    expect(isValidXML(null)).toBeFalsy();
    expect(isValidXML(undefined)).toBeFalsy();
    expect(isValidXML(true)).toBeFalsy();
    expect(isValidXML(false)).toBeFalsy();
    expect(isValidXML({})).toBeFalsy();
    expect(isValidXML([])).toBeFalsy();
  });

  it("should return false for an xml with child nodes, one of which has same tag as its parent", () => {
    expect(isValidXML("<a><d/><a/></a>")).toBeFalsy();
  });

  it("should return false for an xml with one of the non-first top level node with depth more than 2", () => {
    expect(isValidXML("<b/><a><b><c/><d/></b></b><c/>")).toBeFalsy();
  });
});
