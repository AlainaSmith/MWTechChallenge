import React, {useState, useEffect} from 'react'
import axios from 'axios'
const UserData = () => {
    const [Users, fetchUsers] = useState([])
    const data = axios.get('https://api.mwi.dev/content/home')

    // const getData = () => {
    //   fetch('https://api.mwi.dev/content/home')
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res)
    //       fetchUsers(res)
    //     })
    // }
  
    // useEffect(() => {
    //   getData()
    // }, [])

    return (
      <>
        <h2>{data.title}</h2>
        {/* <ul>
          {Users.map((item, i) => {
            return <li key={i}>{item.name}</li>
          })}
        </ul> */}
      </>
    )
  }
  
  export default UserData