import { PagesForm } from './PageForm';
import { ThemeProvider } from '../context/theme.context';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <PagesForm></PagesForm>
      </ThemeProvider>
    </>
  );
}

export default App;
