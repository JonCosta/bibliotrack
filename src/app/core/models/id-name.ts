export default class IdName {
    id: number;
    name: string

    constructor(obj: any) {
        this.id = 0;
        this.name = "";

        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
        }
    }
}