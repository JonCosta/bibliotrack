import IdName from "./id-name";
import User from "./user";

class Base {

    id: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    createdBy: User | IdName | null;
    updatedBy: User | IdName | null;

    constructor() {
        this.id = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.createdBy = null;
        this.updatedBy = null;
    }

}

export default Base;