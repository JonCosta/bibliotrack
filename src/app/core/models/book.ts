import Base from "./base";

class Book extends Base {

    name: string | null;

    constructor(book?: any) {
        super();
        this.name = null;
    }
}

export default Book;