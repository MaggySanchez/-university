import DB from '../database/users/dataUser.json';

type Role = 'students' | 'administrators' | 'teachers';


export default function findUser(username: string, role: Role) {
    const usuarios = DB.users[role];
    return usuarios.find((usuario) => usuario.username === username);
}

