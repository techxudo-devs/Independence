import SmoothScroll from './components/common/SmoothScroll'
import Homepage from './components/Home/Homepage'
import WhatsAppIcon from './components/common/WhatsAppIcon'
import IntroModal from './components/common/IntroModal'

const App = () => {
  return (
    <>
    <IntroModal />
      <SmoothScroll>
        <Homepage />
      </SmoothScroll>
      <WhatsAppIcon />
    </>
  )
}

export default App