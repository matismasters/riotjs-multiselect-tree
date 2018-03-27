riot.tag2('multiselect-tree-node', '<li class="{selected: checked}"> <label riot-style="{indentationStyle}" for="{name}" onclick="{showHideChildren}"> <input id="{name}" if="{leaf}" type="checkbox" name="{name}" onclick="{selectNode}"> <span class="indentation-open-close-icon" if="{hasChildren}">{displayChildren ? \'-\' : \'+\'}</span> <span class="indentation-open-close-icon" if="{!hasChildren && !leaf}">&nbsp;</span> {data[parent.opts.name_attribute]} </label> <ul show="{children.length > 0 && displayChildren}"> <multiselect-tree-node each="{children}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul> </li>', '', '', function(opts) {
    this.storage = this.parent.storage;

    this.level = this.parent.level + 1;
    this.hasChildren = this.children.length > 0;
    this.indentationStyle = `padding-left: ${this.level * 5}px`;

    this.selectNode = function (e) {
      if (e.target.checked) {
        this.checked = true;
        this.storage.addSelectedNode(e.item.name, e.item.data);
      } else {
        this.checked = false;
        this.storage.removeSelectedNode(e.item.name);
      }
    }

    this.showHideChildren = function () {
      if (!this.leaf && this.hasChildren) {
        if (this.displayChildren) {
          this.displayChildren = false;
        } else {
          this.displayChildren = true;
        }
      }
    }
});
riot.tag2('multiselect-tree-view', '<ul class="root"> <multiselect-tree-node each="{rootChildren}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul>', 'multiselect-tree-view ul,[data-is="multiselect-tree-view"] ul{ padding: 0; } multiselect-tree-view li,[data-is="multiselect-tree-view"] li{ font-family: \'Lato\', sans-serif; line-height: 2.5em; } multiselect-tree-view li span.indentation-open-close-icon,[data-is="multiselect-tree-view"] li span.indentation-open-close-icon{ border: 1px solid #888; border-radius: 15px; display: inline-block; width: 1.5em; height: 1.5em; line-height: 1.5em; text-align: center; font-size: 10px; position: relative; top: -0.1em; } multiselect-tree-view li.selected label,[data-is="multiselect-tree-view"] li.selected label{ border-left: 5px solid #2b8be9 !important; } multiselect-tree-view li label,[data-is="multiselect-tree-view"] li label{ position: relative; font-size: 14px; line-height: 18px; color: #313842; border: 1px solid #eaebec !important; display: block; padding: 10px; border-radius: 5px; }', 'class="mtv-container"', function(opts) {
    this.rootChildren = JSON.parse(
      this.opts.json_tree_hash ||
      multiselectTreeViewDataHash
    ).children;

    this.storage = new SelectedNodesStorage({
      debug: this.opts.debug,
      tagName: this.root.localName
    });

    this.level = 0;
});