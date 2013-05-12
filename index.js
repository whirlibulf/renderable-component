function ComponentFactory(options) {
  return {
    "type": options.type || null,
    "visible": options.visible || true,
    "zIndex": options.zIndex || 0
  };
}

module.exports = ComponentFactory;
