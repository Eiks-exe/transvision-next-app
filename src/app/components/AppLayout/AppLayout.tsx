import AppFooter from '../AppFooter/AppFooter'
import AppNavbar from '../AppNavbar/AppNavbar'
 
interface Props {
    children?: React.ReactNode;
    dark?: boolean;
}


const  AppLayout:  React.FC<Props> = ({ children }) => {
  return (
    <>
      <AppNavbar title={ "Transvision" }/>
      <main>{children}</main>
    </>
  )
}

export default AppLayout; 