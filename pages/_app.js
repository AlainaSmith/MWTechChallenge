import '../styless/global.css'
import UserData from './API'
import Home from '.'
import Contact from '../components/Contact'

  const App = () => {
    return(
      <div>
        <UserData />
        <Home />
        <Contact />
      </div>
    )
  }

export default App

  // export default function App({ Component, pageProps }) {
  //   return <Component {...pageProps} />
  // }