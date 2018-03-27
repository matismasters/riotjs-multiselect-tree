class MultiselectTreeObserver {
  constructor() {
    riot.observable(this);
    this.listenToSelectedUpdate();
  }

  listenToSelectedUpdate() {
    this.on('selected-update', function (message) {
      console.log(message);
    })
  }

}