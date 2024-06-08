import { PagesProvider } from '@/context/pages.context';
import { ThemeProvider } from '../context/theme.context';
import { PagesForm } from './PageForm';
import { ResultCard } from './ResultCard';
import { ModeToggle } from './ModeToggle';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <PagesProvider>
          <div className=" h-screen flex justify-between relative">
            <PagesForm></PagesForm>
            <ResultCard></ResultCard>
            <ModeToggle/>
          </div>
  
        </PagesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
