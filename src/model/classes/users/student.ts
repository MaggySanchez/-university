import { User } from "./user"
import { NormalUser } from "../../types"

export class Student extends User {

    constructor(data: NormalUser) {
        super(data)
    }

    registerInASubject(){}

}