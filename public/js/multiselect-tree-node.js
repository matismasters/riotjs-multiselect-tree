riot.tag2('multiselect-tree-node', '<li> {data[parent.opts.name_attribute]} <ul if="{children.length > 0}"> <multiselect-tree-node each="{children}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul> </li>', '', '', function(opts) {
    console.log(opts)
});