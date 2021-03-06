/*
validator's isValidXML function receives a string, checks if a string is a valid xml, and returns a boolean.

<a /> => true
<a></a> => true
<a>test</a> => true
<a><b></b></a> => true
<a></a><b></b> => true

<a> => false
<<a></a> => false
<a><b></a></b> => false

IMPORTANT: Please note that we have our own internal rules about validity.
1. A node cannot contain a node with the same tag. ex) <a><a></a></a> => false
2. A node cannot be followed by a node with the same tag. ex) <a></a><a></a> => false
3. An xml cannot be more than 2 levels deep. ex) <a><b><c><d></d></c></b></a> => false

IMPORTANT: Feel free to use any open source libraries you find necessary. You can use xml parsing libraries as well.
IMPORTANT: Don't worry about XML declaration, node attributes, or unicode characters.

For further examples, please check basic_spec.js file.

DO NOT MODIFY
*/

/*
@param xmlString: a string, possibly a valid xml string
@return boolean;
*/
exports.isValidXML = xmlString => {
  if (typeof xmlString !== "string" || xmlString.length === 0) {
    // Case where xml string is empty string
    return false;
  }

  // Initialize xml string parser
  const parser = new DOMParser();
  // Wrap XML string with a tag be
  const wrappedXmlString = `<tempouterwrapper>${xmlString}</tempouterwrapper>`;
  // Store returned xml document as result
  const xmlDom = parser.parseFromString(wrappedXmlString, "text/xml");
  const topNode = xmlDom.documentElement;

  if (topNode.nodeName === "parsererror") {
    // Case where there was a universal error in xml string
    return false;
  }

  const recurseNode = (node, parentNode, depth) => {
    let result = true;

    for (let i = 0; i < node.childNodes.length; i++) {
      if (depth > 2) {
        //Case more that 2 depth deep
        return false;
      } else if (equalTag(node.childNodes[i], node)) {
        //Case contain same tag
        return false;
      } else if (
        i < node.childNodes.length - 1 &&
        equalTag(node.childNodes[i], node.childNodes[i + 1])
      ) {
        //Case same tag consecutive
        return false;
      } else {
        result = result && recurseNode(node.childNodes[i], node, depth + 1);
      }
    }

    return result;
  };

  const equalTag = (one, two) => one.nodeName === two.nodeName;

  return recurseNode(topNode, { nodeName: "fakeparent" }, 0);
};
