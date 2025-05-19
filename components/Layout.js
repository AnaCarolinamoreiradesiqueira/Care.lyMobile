// componentes/Layout.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      // Adicione outros casos conforme forem criadas novas páginas
      default:
        return <div className="p-4">Página não encontrada: {activePage}</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} setActivePage={setActivePage} />
      <main className="flex-1 overflow-auto p-4 bg-[#F9FAFB] dark:bg-[#121212]">
        {renderPage()}
      </main>
    </div>
  );
};

export default Layout;
