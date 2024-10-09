import Base from "./base";

class Author extends Base {

    name: string | null;

    constructor(author?: any) {
        super();
        this.name = null;
    }
}

export default Author;