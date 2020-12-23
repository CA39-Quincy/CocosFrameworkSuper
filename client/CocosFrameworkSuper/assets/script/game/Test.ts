// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { _decorator, Component, Node, log } from 'cc';
import { Framework } from '../framework/core/Framework';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0; 

    start () {
        // Your initialization goes here.
        log("bbbbbbbbbbbbb", Framework.Module.getModule());
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
