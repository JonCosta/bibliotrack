class User extends Base {

    name: string | null;
    profile: Profile | null;

    constructor(user?: any) {
        super();
        this.name = null;
        this.profile = null;
    }
}