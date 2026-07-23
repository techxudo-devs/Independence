import SmoothScroll from './components/common/SmoothScroll'
import Homepage from './components/Home/Homepage'
import WhatsAppIcon from './components/common/WhatsAppIcon'
import IntroModal from './components/common/IntroModal'
import { RegisterModalProvider } from './components/common/RegisterModalContext'
import RegisterModal from './components/common/RegisterModal'

const App = () => {
  return (
    <RegisterModalProvider>
    <RegisterModal />
    <IntroModal />
      <SmoothScroll>
        <Homepage />
      </SmoothScroll>
      <WhatsAppIcon />
    </RegisterModalProvider>
  )
}

export default App