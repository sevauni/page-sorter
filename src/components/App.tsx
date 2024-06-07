import { ThemeProvider } from '../context/theme.context';
import { PagesForm } from './PageForm';
import { ResultCard } from './ResultCard';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <div className="bg-red-400 h-screen flex justify-between">
          <PagesForm></PagesForm>
          <ResultCard></ResultCard>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
