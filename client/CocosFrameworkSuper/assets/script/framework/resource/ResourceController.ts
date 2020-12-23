import { ControllerBase } from "../controller/ControllerBase";

export class ResourceController extends ControllerBase {
    constructor() {
        super();
    }

    getResource() {
        return "resource"
    }
}