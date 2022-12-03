import React, { useState } from "react";
import pic from '../../images/bb.png'
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getUser } from "../../api/UserRequests";
const Conversation = () => {

  const [userData, setUserData] = useState(null)
//   const dispatch = useDispatch()

//   useEffect(()=> {

//     const userId = data.members.find((id)=>id!==currentUser)
//     const getUserData = async ()=> {
//       try
//       {
//           const {data} =await getUser(userId)
//          setUserData(data)
//          dispatch({type:"SAVE_USER", data:data})
//       }
//       catch(error)
//       {
//         console.log(error)
//       }
//     }

//     getUserData();
//   }, [])
  return (
    <>
      <div className="follower conversation">
        <div>
          <div className="online-dot"></div>
          <img
            src={pic}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.firstname} {userData?.lastname}</span>
            <span style={{color: "#51e200"}}></span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;