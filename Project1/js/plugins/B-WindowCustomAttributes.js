function Window_CustomAttributes() {
    this.initialize(...arguments);
}

Window_CustomAttributes.prototype = Object.create(Window_StatusBase.prototype);
Window_CustomAttributes.prototype.constructor = Window_CustomAttributes;

Window_CustomAttributes.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this._actor = null;
};

Window_CustomAttributes.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};