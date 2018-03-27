riot.tag2('multiselect-tree-view', '<ul class="root"> <multiselect-tree-node each="{rootChildren}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul>', 'multiselect-tree-view ul,[data-is="multiselect-tree-view"] ul{ padding: 0; } multiselect-tree-view li,[data-is="multiselect-tree-view"] li{ list-style: none; margin-bottom: -1px; display: block; border-top: 1px solid #eaebec; width: 100%; } multiselect-tree-view li.selected,[data-is="multiselect-tree-view"] li.selected{ border-left-width: 5px; border-left-color: #2b8be9; } multiselect-tree-view li label,[data-is="multiselect-tree-view"] li label{ font-weight: normal; white-space: normal; text-transform: none; font-size: 14px; line-height: 18px; padding: 14px; color: #555555; margin: 0; display: block; }', 'class="mtv-container"', function(opts) {

    this.rootChildren = sampleTreeHash.children;

    this.storage = new SelectedNodesStorage(this.root.localName);
});