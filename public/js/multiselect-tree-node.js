riot.tag2('multiselect-tree-node', '<li> <input if="{leaf}" type="checkbox" name="{name}" onclick="{selectNode}"> {data[parent.opts.name_attribute]} <ul if="{children.length > 0}"> <multiselect-tree-node each="{children}" name_attribute="{parent.opts.name_attribute}"></multiselect-tree-node> </ul> </li>', '', '', function(opts) {
    this.storage = this.parent.storage;

    this.id = Math.round(Math.random() * 100);
    this.selectNode = function (e) {
      if (e.target.checked) {
        this.storage.addSelectedNode(e.item.name, e.item.data);
      } else {
        this.storage.removeSelectedNode(e.item.name)
      }
    }
});