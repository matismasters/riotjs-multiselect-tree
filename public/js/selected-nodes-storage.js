class SelectedNodesStorage {

  constructor(tagName) {
    this.rootBucket = tagName;
    this.storageAPI = riot.customStateStorage;
    this.nodeIdAttribute = 'name';
    this.debug = true;

    this.storageAPI[this.rootBucket] = {
      "selectedNodes": [], 
      "selectedNodesIds": [] 
    };
  }

  state() {
    console.log(this.storageAPI[this.rootBucket]);
    console.log(this.selectedNodesIds());
    console.log(this.selectedNodes());
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
    return this.storageAPI[this.rootBucket]['selectedNodes'];
  }

  selectedNodesIds () {
    return this.storageAPI[this.rootBucket]['selectedNodesIds'];
  }

  // Private
  logMessage (message) {
    console.log(message);
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