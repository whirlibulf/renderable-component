function ComponentFactory(options) {
    this.type = options.type || null;

    if (options.visible === undefined) {
        options.visible = true;
    }
    this.visible = options.visible;

    this.zIndex = options.zIndex || 0;
}

module.exports = ComponentFactory;
