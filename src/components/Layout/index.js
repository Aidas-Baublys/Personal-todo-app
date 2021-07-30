import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  paper: {
    width: drawerWidth,
  },
  title: {
    padding: theme.spacing(3),
    fontWeight: "bold",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  aside: theme.mixins.toolbar,
  article: {
    marginTop: theme.spacing(3),
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();

  const menuItems = [
    {
      text: "My notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "New note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography>
            {new Date().toLocaleString("lt")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.paper
        }}
      >
        <Typography className={classes.title} variant="h5">
          Echo Notes
        </Typography>
        <List>
          {menuItems.map(item => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <aside className={classes.aside} />
        <section className={classes.article}>
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
