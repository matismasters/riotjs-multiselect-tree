# Multiselect Tree View

This Riot.js tag takes a hash of nested elements and renders it as a tree view. With fold and unfold capabilities of the node children. The selected Nodes, and their respective Ids are saved and exposed by triggering the `selected-nodes` event, on the passed Observer.

Notes:
- The tree only offers selectability to `leaf` nodes
 
![Screencast demo of the tag](/doc-screencast-demo.gif?raw=true "Screencast demo")

## Usage

You can also check the basic usage on the `public/index.html` file.

- Remember to add riot.js to the page
- Remember to load the file at js/multiselect-tree.js with the <script></script>
- Remember to mount the tag

```html

<script src="riot.js"></script>

<multiselect-tree-view
    name_attribute="label-attribute-name-within-data-hash"
    debug="false"
    json_tree_hash=""
></multiselect-tree-view>

<!-- Generic selected nodes storage class. Handles add/remove logic -->
<script src="/js/selected-nodes-storage.js"></script>

<!-- Template observer class which you should implement to respond to callbacks -->
<script src="/js/multiselect-tree-observer.js"></script>

<!-- Main tag file -->
<script src="/js/multiselect-tree.js"></script>

<script>
    riot.mount('multiselect-tree-view', { 
        observer: new MultiselectTreeObserver() // Implement your own and/or change the class name!!
    });
</script>
```

## Input Hash format

```javascript
[{
    name: 'unique-node-name-or-id',  // the name or id that will be kept and returned when selected
    leaf: false,                     // it should be true if the node is a leaf
    data: {                          // the node data that will be kept and returned when selected
        label: 'showable-name',      // this attribute name is configurable, its value will be shown in the list
        ...                          // any other data
    },
    children: [                      // this array should contain child nodes with the same format as above
        {
            name: ...,
            leaf: true,
            data: { ... },
            children: []
        }
    ]
},
{
    name: ...,
    leaf: false,
    data: { ... },
    children: [...]
}]
```

There are two ways of feeding the tree hash to the tag:
1- (preferred) Pass it as a tag param in json format
2- Save a global variable called multiselectTreeViewDataHash with the tree hash content as a JSON string