import { parseISOString } from "../../shared/utils/utils";
import Base from "./base";

class Author extends Base {

    name: string | null;

    constructor(author?: any) {
        super();
        this.name = null;

        if (author) {
            this.name = author.name;
            this.createdAt = parseISOString(author["created_at"]);
            this.updatedAt = parseISOString(author["updated_at"]);
        }
    }
}

export default Author;