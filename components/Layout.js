import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children, locale, locales }) => (
  <div>
    <Head />
    {children}
  </div>
)

export default Layout
