riot.tag2('multiselect-tree-view', '<ul class="root"> <multiselect-tree-node each="{rootChildren}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul>', 'multiselect-tree-view ul,[data-is="multiselect-tree-view"] ul{ padding: 0; } multiselect-tree-view li,[data-is="multiselect-tree-view"] li{ font-family: \'Lato\', sans-serif; line-height: 2.5em; } multiselect-tree-view li span.indentation-open-close-icon,[data-is="multiselect-tree-view"] li span.indentation-open-close-icon{ border: 1px solid #888; border-radius: 15px; display: inline-block; width: 1.5em; height: 1.5em; line-height: 1.5em; text-align: center; font-size: 10px; position: relative; top: -0.1em; } multiselect-tree-view li.selected label,[data-is="multiselect-tree-view"] li.selected label{ border-left: 5px solid #2b8be9 !important; } multiselect-tree-view li label,[data-is="multiselect-tree-view"] li label{ position: relative; font-size: 14px; line-height: 18px; color: #313842; border: 1px solid #eaebec !important; display: block; padding: 10px; border-radius: 5px; }', 'class="mtv-container"', function(opts) {
    this.rootChildren = JSON.parse(
      this.opts.json_tree_hash ||
      multiselectTreeViewDataHash
    ).children;
    this.level = 0;
    this.storage = new SelectedNodesStorage(this.root.localName);
});