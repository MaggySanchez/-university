import { User } from "./user"
import { NormalUser } from "../../types"

export class Teacher extends User {

    constructor(data: NormalUser) {
        super(data)
    }

    rateStudent(){}

}