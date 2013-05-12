function ComponentFactory(options) {
  this.id = 'renderable';
}

ComponentFactory.prototype.createComponent = function (options) {
  return {
    "type": options.type || null,
    "visible": options.visible || true
  };
};

module.exports = ComponentFactory;
