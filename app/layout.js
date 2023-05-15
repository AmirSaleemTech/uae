// import TopNav from './components/topnav/page'
import TopNav from '@/app/components/topnav/page'
import './globals.css'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css';
import MainNav from './components/mainnav/page';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from '../components/Layout';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Footer from './components/footer/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Desert Adventure in UAE',
  description: 'Enjoy with Us at Desert Adventure in UAE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav></TopNav>
        <MainNav></MainNav>
        
        {children}

        <Footer></Footer>
        </body>
    </html>
  )
}
