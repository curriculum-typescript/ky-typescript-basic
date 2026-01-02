enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Down;
console.log(dir); // 출력: 1


enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED",
}


function getStatusMessage(status:Status){
    switch(status){
        case Status.Pending:
            return "Your request is pending"
        case Status.Approved:
            return "Your request is Approved"
        case Status.Rejected:
            return "Your request is Rejected"

    }

}

console.log(getStatusMessage(Status.Rejected))


enum Role {
  Admin,
  User,
  Guest,
}


function canAccessDashboard(role:Role):boolean{
    return role===Role.Admin || role===Role.User

}

console.log(canAccessDashboard(Role.Guest))


enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

let colorName:string=Color[1]

console.log(colorName)