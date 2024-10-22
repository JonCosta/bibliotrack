import MovementType from "../enums/movement-type";

type MovementFilter = {
    startDate: Date | null,
    endDate: Date | null,
    book: number | null,
    type: MovementType | null
}

export default MovementFilter;