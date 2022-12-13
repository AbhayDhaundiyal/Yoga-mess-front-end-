import '../styles/globals.css'
import '../styles/submit.module.css'
import { DashProvider } from '../contexts/dashboard';


function MyApp({ Component, pageProps }) {
  return  <DashProvider><Component {...pageProps} /></DashProvider>
}

export default MyApp
