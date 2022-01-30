//#region fix Scene Menu
Scene_Menu.prototype.scenesCollection = {
    'skill': Scene_Skill,
    'equip': Scene_Equip,
    'status': Scene_Status
};

Scene_Menu.prototype.onPersonalOk = function () {
    let scene = this.scenesCollection[this._commandWindow.currentSymbol()];
    if (scene == undefined) return;
    SceneManager.push(scene);
};
//#endregion fix Scene Menu