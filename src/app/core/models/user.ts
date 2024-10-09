import Profile from "../enums/profile";
import Base from "./base";

class User extends Base {

    name: string;
    profile: Profile | null;
    email: string | null;
    password: string | null;
    lastAccessAt: Date | null;

    constructor(user?: any) {
        super();
        this.name = "";
        this.profile = null;
        this.email = null;
        this.password = null;
        this.lastAccessAt = new Date();

        if (user) {
            this.id = user.id;
            this.name = user.name;
            this.profile = user.profile;
            this.email = user.email;
            this.lastAccessAt = user["last_access_at"];
        }
    }
};

export default User;