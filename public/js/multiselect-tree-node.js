riot.tag2('multiselect-tree-node', '<li class="{selected: checked}"> <label for="{name}" onclick="{showHideChildren}"> <input id="{name}" if="{leaf}" type="checkbox" name="{name}" onclick="{selectNode}"> <span if="{children.length > 0}">{displayChildren ? \'-\' : \'+\'}</span> {data[parent.opts.name_attribute]} </label> <ul if="{children.length > 0 && displayChildren}"> <multiselect-tree-node each="{children}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul> </li>', '', '', function(opts) {
    this.storage = this.parent.storage;

    this.id = Math.round(Math.random() * 100);
    this.selectNode = function (e) {
      if (e.target.checked) {
        this.checked = true;
        this.storage.addSelectedNode(e.item.name, e.item.data);
      } else {
        this.checked = false;
        this.storage.removeSelectedNode(e.item.name)
      }
    }

    this.showHideChildren = function () {
      if (!this.leaf && this.children.length > 0) {
        if (this.displayChildren) {
          this.displayChildren = false;
        } else {
          this.displayChildren = true;
        }
      }
    }
});