import { log } from "cc";

export class ControllerBase {
    constructor() {
        log(this.constructor.name);
    }
}