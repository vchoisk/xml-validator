# XML validator

XML validator for xml in string format. Utilizes [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)

### Example inputs and expected outcomes
<<<<<<< HEAD
<a /> => true
<a></a> => true
<a>test</a> => true
<a><b></b></a> => true
<a></a><b></b> => true
=======
`<a />` => true

`<a></a>` => true

`<a>test</a>` => true

`<a><b></b></a>` => true

`<a></a><b></b>` => true




`<a>` => false

`<<a></a>` => false

`<a><b></a></b>` => false
>>>>>>> 00bedba... fix readme

<a> => false
<<a></a> => false
<a><b></a></b> => false

<<<<<<< HEAD
### Unique internal validation ruls
1. A node cannot contain a node with the same tag. ex) <a><a></a></a> => false
2. A node cannot be followed by a node with the same tag. ex) <a></a><a></a> => false
3. An xml cannot be more than 2 levels deep. ex) <a><b><c><d></d></c></b></a> => false
=======
### Unique internal validation urls
1. A node cannot contain a node with the same tag. ex) `<a><a></a></a>` => false
2. A node cannot be followed by a node with the same tag. ex) `<a></a><a></a>` => false
3. An xml cannot be more than 2 levels deep. ex) `<a><b><c><d></d></c></b></a>` => false
>>>>>>> 00bedba... fix readme

For further examples, please check basic_spec.js file.