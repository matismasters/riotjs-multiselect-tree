riot.tag2('multiselect-tree-view', '<ul class="root"> <multiselect-tree-node each="{rootChildren}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul>', 'multiselect-tree-view ul li,[data-is="multiselect-tree-view"] ul li{ list-style: none; }', 'class="mtv-container"', function(opts) {

    this.rootChildren = sampleTreeHash.children
});