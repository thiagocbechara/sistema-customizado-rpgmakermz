/*:
 * @targe MZ
 * @plugindesc teste
 * @author Thiago Bechara
 * 
 */

(() => {
    const pluginName = 'AttributePoints';
    PluginManager.registerCommand(pluginName, 'set', args => { });
});

//#region consts
const enabled = true;
const attibuteSimbol = 'attributes';
//#endregion consts

Window_MenuCommand.prototype.addFormationCommand = function () { };

const addMainCommands = Window_MenuCommand.prototype.addMainCommands;
Window_MenuCommand.prototype.addMainCommands = function () {
    addMainCommands.call(this);
    this.addCommand('Atributos', attibuteSimbol, enabled);
};

const createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function () {
    createCommandWindow.call(this);
    this._commandWindow.setHandler(attibuteSimbol, this.commandPersonal.bind(this));
};

Scene_Menu.prototype.scenesCollection[attibuteSimbol] = Scene_Custom_Attributes;