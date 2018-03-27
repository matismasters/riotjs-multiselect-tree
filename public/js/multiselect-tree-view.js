riot.tag2('multiselect-tree-view', '<ul class="root"> <multiselect-tree-node each="{root_children}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul>', '', 'class="mtv-container"', function(opts) {
    this.root_children = sample_tree_hash.children
});