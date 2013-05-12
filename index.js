function ComponentFactory(options) {
  return {
    "type": options.type || null,
    "visible": options.visible || true
  };
}

module.exports = ComponentFactory;
