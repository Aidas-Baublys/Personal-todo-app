import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Notes from './pages/Notes';
import Create from './pages/Create';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(170, 100, 100)",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Courier+Prime",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;