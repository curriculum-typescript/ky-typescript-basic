var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Down;
console.log(dir); // 출력: 1
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Approved"] = "APPROVED";
    Status["Rejected"] = "REJECTED";
})(Status || (Status = {}));
function getStatusMessage(status) {
    switch (status) {
        case Status.Pending:
            return "Your request is pending";
        case Status.Approved:
            return "Your request is Approved";
        case Status.Rejected:
            return "Your request is Rejected";
    }
}
console.log(getStatusMessage(Status.Rejected));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
function canAccessDashboard(role) {
    return role === Role.Admin || role === Role.User;
}
console.log(canAccessDashboard(Role.Guest));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let colorName = Color[1];
console.log(colorName);
export {};
