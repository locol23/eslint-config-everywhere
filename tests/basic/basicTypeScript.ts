interface UserProfile {
  email: string
  id: number
  isActive: boolean
  name: string
}

export class UserService {
  private users: UserProfile[] = []

  public addUser(user: UserProfile): void {
    this.users.push(user)
  }

  public findUserById(id: number): UserProfile | undefined {
    return this.users.find((user) => user.id === id)
  }

  public getActiveUsers(): UserProfile[] {
    return this.users.filter((user) => user.isActive)
  }
}

export function createUser(name: string, email: string): UserProfile {
  return {
    email,
    id: Math.floor(Math.random() * 1000),
    isActive: true,
    name,
  }
}