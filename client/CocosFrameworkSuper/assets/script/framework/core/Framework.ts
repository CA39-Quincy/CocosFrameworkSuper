import { ModuleController } from "../module/ModuleController";
import { ResourceController } from "../resource/ResourceController";
import { DEBUG, EDITOR } from "cce.env";

export class Framework {

    // 资源管理
    public static Resource = new ResourceController();
    // 模块管理
    public static Module = new ModuleController();

    public static registerGlobal(key: string, value: any) {
        Object.defineProperty(window, key, {
            value: value,
            configurable: true,
            writable: false,  //锁定属性不能再修改 
            enumerable: false   //隐藏迭代打印
        })
    }
}

// 注册到全局，方便控制台输出调试
if (DEBUG && !EDITOR) {
    Framework.registerGlobal("Framework", Framework);
}