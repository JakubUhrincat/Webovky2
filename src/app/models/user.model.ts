export class User{

  contact: string;
  userName: string;
  userId: string;

//  user={userId:"",userName:"",contact:""}


  constructor(user: User) {
    this.contact = user.contact;
    this.userName = user.userName;
    this.userId = user.userId;
  }
}
