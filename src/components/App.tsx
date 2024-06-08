import { PagesProvider } from '@/context/pages.context';
import { ThemeProvider } from '../context/theme.context';
import { ModeToggle } from './ModeToggle';
import { PagesForm } from './PageForm';
import { ResultCard } from './ResultCard';

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <PagesProvider>
          <div className=" h-screen flex flex-col justify-between relative md:flex-row">
            <PagesForm />
            <ResultCard />
            <ModeToggle />
          </div>
        </PagesProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
