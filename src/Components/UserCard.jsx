import data from "../Data/users.json"




export default function UserCard () {
  
  return (
    <div className="usersGrid" >
      {data.users.map((user) => {
        let userColor = "userCard";

        if (user.age > 30) {
          userColor = "userCard over-30";
        }
        return (
          <div key={user.id} className={userColor}>
            <h2>{user.name}</h2>
            <p>Age : {user.age}</p>
          </div>
        );
      })}
    </div>
  );
}


