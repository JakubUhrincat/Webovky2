export class User{

  userName: string;
  contact: string;
  userId?: string;

//  user={userId:"",userName:"",contact:""}


  constructor(user: User) {
    this.userName = user.userName;
    this.contact = user.contact;
    this.userId = user.userId;
  }
}

export class UsersList {
  userId?: string;
  userName: string;
  contact: string;

  constructor(user: UsersList) {
    this.userId = user.userId;
    this.userName = user.userName;
    this.contact = user.contact;
  }
}

