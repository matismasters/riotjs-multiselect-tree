riot.tag2('multiselect-tree-view', '<button onclick="{updateAll}">update all</button> <ul class="root"> <multiselect-tree-node each="{rootChildren}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul>', 'multiselect-tree-view ul li,[data-is="multiselect-tree-view"] ul li{ list-style: none; } multiselect-tree-view li.selected,[data-is="multiselect-tree-view"] li.selected{ color: blue } multiselect-tree-view li label,[data-is="multiselect-tree-view"] li label{ font-weight: normal; }', 'class="mtv-container"', function(opts) {

    this.rootChildren = sampleTreeHash.children;
    this.bigFoot = { 'ana': 'never' };

    this.storage = new SelectedNodesStorage(this.root.localName);

    this.updateAll = function () {
      this.update();
    }
});