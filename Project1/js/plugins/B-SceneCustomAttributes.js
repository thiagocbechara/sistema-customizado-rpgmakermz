//#region Scene_Custom_Attributes
function Scene_Custom_Attributes() {
    this.initialize(...arguments);
}

Scene_Custom_Attributes.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Custom_Attributes.prototype.constructor = Scene_Custom_Attributes;

Scene_Custom_Attributes.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Custom_Attributes.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createProfileWindow();
    this.createStatusWindow();
    this.createSCustomAttributesWindow();
};

Scene_Custom_Attributes.prototype.helpAreaHeight = function() {
    return 0;
};

Scene_Custom_Attributes.prototype.createProfileWindow = function() {
    const rect = this.profileWindowRect();
    this._profileWindow = new Window_Help(rect);
    this.addWindow(this._profileWindow);
};

Scene_Custom_Attributes.prototype.profileWindowRect = function() {
    const ww = Graphics.boxWidth;
    const wh = this.profileHeight();
    const wx = 0;
    const wy = this.mainAreaBottom() - wh;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Custom_Attributes.prototype.createStatusWindow = function() {
    const rect = this.statusWindowRect();
    this._statusWindow = new Window_Status(rect);
    this._statusWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(this._statusWindow);
};

Scene_Custom_Attributes.prototype.statusWindowRect = function() {
    const wx = 0;
    const wy = this.mainAreaTop();
    const ww = Graphics.boxWidth;
    const wh = this.customAttributesWindowRect().y - wy;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Custom_Attributes.prototype.createCustomAttributesWindow = function() {
    const rect = this.customAttributesWindowRect();
    this._customAttributesWindow = new Window_CustomAttributes(rect);
    this.addWindow(this._customAttributesWindow);
};

Scene_Custom_Attributes.prototype.customAttributesWindowRect = function() {
    const ww = Graphics.boxWidth;
    const wh = this.customAttributesHeight();
    const wx = 0;
    const wy = this.mainAreaBottom() - this.profileHeight() - wh;
    return new Rectangle(wx, wy, ww, wh);
};

Scene_Custom_Attributes.prototype.customAttributesHeight = function() {
    return this.calcWindowHeight(6, false);
};

Scene_Custom_Attributes.prototype.profileHeight = function() {
    return this.calcWindowHeight(2, false);
};

Scene_Custom_Attributes.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    const actor = this.actor();
    this._profileWindow.setText(actor.profile());
    this._statusWindow.setActor(actor);
    this._customAttributesWindow.setActor(actor);
};
//#endregion Scene_Custom_Attributes