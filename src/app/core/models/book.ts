import { parseISOString } from "../../shared/utils/utils";
import Base from "./base";
import IdName from "./id-name";

class Book extends Base {

    name: string;
    author: IdName | null;

    constructor(book?: any) {
        super();
        this.name = "";
        this.author = null;

        if (book) {
            this.id = book.id;
            this.name = book.name;
            this.createdAt = parseISOString(book["created_at"]);
            this.updatedAt = parseISOString(book["updated_at"]);
            this.author = new IdName(book.author);
        }
    }

    
}

export default Book;