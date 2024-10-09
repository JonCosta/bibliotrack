import { parseISOString } from "../../shared/utils/utils";
import Base from "./base";

class Publisher extends Base {

    name: string;

    constructor(publisher?: any) {
        super();
        this.name = "";

        if (publisher) {
            this.id = publisher.id;
            this.name = publisher.name;
            this.createdAt = parseISOString(publisher["created_at"]);
            this.updatedAt = parseISOString(publisher["updated_at"]);
        }
    }
}

export default Publisher;