import DB from "../../../database/users/dataUser.json";
import jsonfile from 'jsonfile';
import { randomUUID } from 'crypto';
import findUser from '../../utils'
import { UserType, NormalUser } from '../../types';
import { Student } from "./student";
import { Teacher } from "./teacher";
import { User } from "./user";

const path = '../../../database/database.json'

class Admin {

    username;
    password;
    id;
    role;
    isLoggedIn: boolean;

    constructor(username:string, password:string) {

        this.username = username;
        this.password = password;
        this.role = 'admin';
        this.id = randomUUID();
        this.isLoggedIn = false;

        if(!findUser(username, 'administrators')){
            DB.users.administrators.push({
                username: this.username,
                password: this.password,
                id: this.id,
                role: this.role
            });
    
            jsonfile.writeFileSync(path, DB)
        } else {console.log('The administrator already exists');
        }
    }

    createUser(data: NormalUser){
        const { username, role } = data;

        const userType : UserType = role === 'student' ? 'students' : 'teachers';


        if(!findUser(username, userType)) {
            let newUser;

            switch(userType) {
                case 'students':
                    newUser = new Student(data)
                    DB.users.students.push(newUser)
                break;
                case 'teachers':
                    newUser = new Teacher(data);
                    DB.users.teachers.push(newUser)
                break;
            }

            jsonfile.writeFileSync(path,DB)
        } else { return console.log('User already exists');
        }

    }
    login(){}
    logout(){}
    createSubject(){}
    editUser(){}
}