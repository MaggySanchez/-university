export type UserType = 'administrators' | 'teachers' | 'students'
export type UsersRole = 'student' | 'teacher';

export interface  NormalUser {
    username: string, 
    password:string,
    role: UsersRole
    birthyear: number
}









