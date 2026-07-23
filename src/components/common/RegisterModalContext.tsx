import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface RegisterModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const RegisterModalContext = createContext<RegisterModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export const useRegisterModal = () => useContext(RegisterModalContext)

export const RegisterModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <RegisterModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </RegisterModalContext.Provider>
  )
}
