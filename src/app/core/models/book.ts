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
            this.createdAt = this.parseISOString(book["created_at"]);
            this.updatedAt = this.parseISOString(book["updated_at"]);
            this.author = new IdName(book.author);
        }
    }

    private parseISOString(dateString: string) {
        let b = dateString.split(/\D+/);
        let year: number = +b[0];
        let month: number = +b[1];
        let day: number = +b[2];
        let hours: number = +b[3];
        let minutes: number = +b[4];
        let seconds: number = +b[5];
        return new Date(Date.UTC(year, --month, day, hours, minutes, seconds, 0));
      }
}

export default Book;