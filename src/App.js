import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import Notes from './pages/Notes';
import Create from './pages/Create';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(170, 100, 100)",
    },
    secondary: {
      main: "rgb(204, 150, 0)",
    },
  },
  typography: {
    fontFamily: "Courier+Prime",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;