import MovementType from "../enums/movement-type";
import Base from "./base";
import IdName from "./id-name";

class Movement extends Base {

    movementDate: Date | null;
    type: MovementType | null;
    quantity: number;
    book: IdName | null;

    constructor(movement?: any) {
        super();
        this.movementDate = null;
        this.type = null;
        this.quantity = 0;
        this.book = null;

        if (movement) {
            this.movementDate = new Date(movement["movement_date"]);
            this.type = movement.type;
            this.quantity = movement.quantity;
            this.book = new IdName(movement.book);
            this.createdBy = new IdName(movement["created_by"]);
            this.createdAt = new Date(movement["created_at"]);
            this.updatedAt = new Date(movement["updated_at"]);
        }
    }
}

export default Movement;