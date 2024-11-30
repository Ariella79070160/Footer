import clsx from 'clsx';

import Footer from './components/Footer';
import Toast from './components/ui/Toast';
import { useToastContext } from './context/ToastContext';
import './App.css'

function App() {
  const { toast } = useToastContext()

  return (
    <main>
      {toast.show && <Toast type={toast.type} message={toast.message}/>}
      <div
        className={clsx(
          'min-h-[calc(100vh_-_32px)] rounded-md bg-white',
          'shadow-sm md:shadow-md lg:shadow-lg',
          'flex items-center',
        )}>
        <section className={clsx('w-full', 'md:py-[116px] lg:py-[65px]')}>
          <Footer />
        </section>
      </div>
    </main>
  )
}

export default App
