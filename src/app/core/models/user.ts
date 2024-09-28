import Profile from "../enums/profile";
import Base from "./base";

class User extends Base {

    name: string | null;
    profile: Profile | null;
    email: string | null;
    password: string | null;
    lastAccessAt: Date | null;

    constructor(user?: any) {
        super();
        this.name = null;
        this.profile = null;
        this.email = null;
        this.password = null;
        this.lastAccessAt = new Date();
    }
};

export default User;