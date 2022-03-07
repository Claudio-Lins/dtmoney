import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] =
    useState(false);

  function handleOpenNewTransitionModal() {
    setIsNewTransitionModalOpen(true);
  }
  function handleCloseNewTransitionModal() {
    setIsNewTransitionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTranslationModal={handleOpenNewTransitionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransitionModalOpen}
        onRequestClose={handleCloseNewTransitionModal}
      />
      <GlobalStyle />
    </>
  );
}
