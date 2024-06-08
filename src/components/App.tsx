import { PagesProvider } from '@/context/pages.context';
import { ThemeProvider } from '../context/theme.context';
import { PagesForm } from './PageForm';
import { ResultCard } from './ResultCard';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <PagesProvider>
          <div className="bg-red-400 h-screen flex justify-between">
            <PagesForm></PagesForm>
            <ResultCard></ResultCard>
          </div>
        </PagesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
