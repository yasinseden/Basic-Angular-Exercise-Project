export class UserModel {
    userName: string | null | undefined = null;
    password: string | null | undefined = null;
    role: string | null | undefined = null;

    constructor(userName?: string, password?: string, role?: string) {
        this.userName = userName,
        this.password = password,
        this.role = role
    }
}