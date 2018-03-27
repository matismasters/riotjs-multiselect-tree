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