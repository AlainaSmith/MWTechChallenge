import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'

export default function Home() {
const [showList, setShowList] = useState(false) //this means we wont see the list upon refresh.

const clickHandler = () => {
  if(showList === false) {
    setShowList(true)
  } else if(showList === true){
    setShowList(false)
    alert('This operation has been completed already')
  }
  // console.log('clicked')
  // setShowList(true)
}
const uniqueChars = new Set()   //Set holds unique values
const arr = [
  {name:'Matt Johnson'},
  {name:'Matt Johnson'},
  {name:'Bart Paden'},
  {name:'Ryan Doss'},
  {name:'Jared Malcolm'},
];

const arr2 = [
  {name:'Matt Johnson'},
  {name:'Bart Paden'},
  {name:'Bart Paden'},
  {name:'Jordan Heigle'},
  {name:'Jordan Heigle'},
  {name:'Tyler Viles'},
]


const filteredArr = arr.filter((obj) => {    //filter() to loop over each element in the array (name)
  const presentChars = uniqueChars.has(obj.name);  //has() checks if the current object's name is already in the array
  uniqueChars.add(obj.name); //elements will only be added if they are not already present
  return !presentChars
});

console.log(filteredArr);

const filteredArr2 = arr2.filter((obj) => {    //filter() to loop over each element in the array (name)
  const presentChars = uniqueChars.has(obj.name);  //has() checks if the current object's name is already in the array
  uniqueChars.add(obj.name); //elements will only be added if they are not already present
  return !presentChars
});

console.log(filteredArr2);

const [Users, fetchUsers] = useState([])

    // const getData = () => {
    //   fetch('https://api.mwi.dev')
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
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main>
     <div className='mwlogo'>
      <Image 
          src="/images/mwlogo.png" 
          height={74}
          width={344} 
          alt="Your Name"
       />
    </div>

      <h1 className="title">

  <Link href="./components/Contact">
    <a>contact</a>
  </Link>
</h1>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
          <div className='containerlogos'>
          <Image 
          src="/images/talkie.png" 
          height={90}
          width={50} 
          alt="Your Name"
       />
       </div>
            <h3>Heading Two</h3>
            <p>Integer accumsan molestie nisl, id <br></br>faucibus urna accumsan quis. Proin <br></br>vulputate, mauris semper maximus.</p>
          <div id='talkieLearn'>
            Learn More
          </div>
          
          </a>

          <a href="https://nextjs.org/learn" className="card">
          <div className='containerlogos'>
          <Image 
          src="/images/rabbit.png" 
          height={70}
          width={100} 
          alt="Your Name"
       />
       </div>
            <h3>Heading Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore</p>
            <div className='learnButton'>
            Learn More
          </div>
         
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <div className='containerlogos'>
             <Image 
          src="/images/shield.png" 
          height={70}
          width={70} 
          alt="Your Name"
       />
       </div>
            <h3>Heading Two</h3>
            <p>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore</p>
            <div className='learnButton'>
            Learn More
          </div>
         
          </a>


        </div>
      </main>
      <h1>Heading One</h1>
      <div id='goldLine'></div>
            <p id='footertext'>Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when 
              <button onClick={clickHandler}>This Link</button>
              is clicked. If the operation has been completed already, notify the user that this has already been done.</p>
          <div id='filterOne' className='filteredNames'>{showList && 
             <ul> 
                {filteredArr.map((item, index) => {
                  return <li key={index}>
                    {item.name}
                  </li>
                }) 
                }
              </ul>
        }
        </div>
        <div id='filterTwo' className='filteredNames'>{showList && 
             <ul> 
                {filteredArr2.map((item, index) => {
                  return <li key={index}>
                    {item.name}
                  </li>
                }) 
                }
              </ul>
        }
        </div>

        
             
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #222222
        }
        
        .mwlogo{
          width: 100%;
          object-fit: cover;
          object-position: bottom;
          position:relative;
          bottom:3rem;
          right:1rem
       }

       .containerlogos{
         
       }

       .learnButton{
         background-color:#DEBF79;
         color:white;
         padding:0.5rem;
         width:45%;
         position:relative;
         left:4.4rem;
         top:3rem
       }

       #talkieLearn{
         position:relative;
         top: 1.5rem;
         left:4.4rem;
         background-color:#DEBF79;
         color:white;
         padding:0.5rem;
         width:45%;
       }
       #goldLine{
         height: .2rem;
         width: 30rem;
         background-color: #DEBF79;
         position: relative;
         right: 19rem;
       }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #DEBF79;
          text-decoration: none;
         font-size:20px
          
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
          position: relative;
          left:30rem;
          bottom:7.5rem;
          
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          // flex-wrap: wrap;
          position:relative;
          bottom:3rem
        }

        h1 {
          color:white;
          margin-right:auto;
          position:relative;
          left: 4.3rem;
          bottom:8rem;
          font-size:50px
        }

        #goldLine{
          height: .2rem;
          width: 11.3rem;
          background-color: #DEBF79;
          position: relative;
          right: 29.1rem;
          bottom:10rem
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          height:22rem;
          width:22rem;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color:white;
          text-align:center
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.9rem;
        }

        .card p {
          margin: 0;
          font-size: .80rem;
          line-height: 1.9;
          color: #858585;
          font-weight:medium
        }

        .logo {
          height: 1em;
        }

        #footertext {
          color:white;
         margin: 5rem;
         position: relative;
         bottom: 13rem
        }

        .filteredNames{
          color: white; 
          position:relative;
          bottom: 14rem;
        }

        #filterTwo{
         margin: -2rem;
         margin-left: -2.4rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}



// {filteredArr.map(({name})=>{
//   <p key={name}>{name}</p>
// })}


//ternary
// {showList ? <ul> //showList is false until we click the button to make it true. 
// {filteredArr.map((item, index) => {
//   return <li key={index}>
//     {item.name}
//   </li>
// }) 
// }
// </ul> : <h1>hidden</h1>
// }


{/* <div>
     
     <ul>
       {Users.map((item, i) => {
         return <li key={i}>{item.name}</li>
       })}
     </ul>
     </div> */}