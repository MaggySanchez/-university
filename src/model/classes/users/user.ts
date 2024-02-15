import { NormalUser } from "../../types";
import { randomUUID } from "crypto";

export class User {
    username;
    password;
    id;
    role;
    numSubjects: string[];
    birthyear;

    constructor(data: NormalUser){

        const { username, password, birthyear, role } = data

        this.username = username;
        this.password = password;
        this.id = randomUUID();
        this.role = role;
        this.numSubjects = [];
        this.birthyear = birthyear;
    }

    login(){}
    logout(){}
    changePassword(){}
}