import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const drawerWidth = 200;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  paper: {
    width: drawerWidth,
  },
});

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
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.paper
        }}
      >
        <Typography variant="h5">
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
        {children}
      </main>
    </div >
  );
}

export default Layout;
