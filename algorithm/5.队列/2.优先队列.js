function priorityQueue() {
  var items = [];
  this.enqueue = function (value, priority) {
    var item = {
      value,
      priority,
    };
    var added = false;
    for (var i = 0; i < items.length; i++) {
      if (item.priority > items[i].priority) {
        items.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(item);
    }
  };
}
