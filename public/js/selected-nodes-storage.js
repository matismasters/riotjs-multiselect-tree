// Version 0.1

class SelectedNodesStorage {

  constructor(opts) {
    this.rootBucket      = opts.tagName || 'selectedNodesStorage';
    this.storage         = opts.storage || {};
    this.nodeIdAttribute = opts.name || 'name';
    this.debug           = opts.debug == 'true';

    this.storage[this.rootBucket] = {
      "selectedNodes": [], 
      "selectedNodesIds": [] 
    };
  }

  state() {
    this.logMessage(this.storage[this.rootBucket]);
    this.logMessage(this.selectedNodesIds());
    this.logMessage(this.selectedNodes());
  }

  addSelectedNode (nodeId, node) {
    if (!this.isNodeSelected(nodeId)) {
      this.selectedNodes().push(node);
      this.selectedNodesIds().push(nodeId);
      this.state();

      return true;
    } else {
      this.logMessage('Node already selected');
      
      return false;
    }
  }

  removeSelectedNode (subjectNodeId) {
    var nodeIndex = this.findNodeIndex(subjectNodeId);

    if (nodeIndex != -1) {
      this.selectedNodes().splice(nodeIndex, 1);
      this.selectedNodesIds().splice(nodeIndex, 1);
      this.state();

      return true
    } else {
      this.logMessage('Node not found when trying to delete');
    }
  }

  selectedNodes () {
    return this.storage[this.rootBucket]['selectedNodes'];
  }

  selectedNodesIds () {
    return this.storage[this.rootBucket]['selectedNodesIds'];
  }

  // Private
  logMessage (message) {
    if (this.debug) { console.log(message) }
  }


  findNode (subjectNodeId) {
    nodeIndex = this.findNodeIndex(subjectNodeId);
    return (nodeIndex != -1) ? this.selectedNodes[nodeIndex] : null
  }

  findNodeIndex (subjectNodeId) {
    return this.selectedNodesIds().indexOf(subjectNodeId);
  }

  isNodeSelected (nodeId) {
    return this.findNodeIndex(nodeId) != -1;
  }
}

riot.customStateStorage = {};