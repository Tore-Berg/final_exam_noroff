import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Enquiry from "./pages/Enquiry";
import ReadEnquiries from "./pages/Admin/enquiries/";
import { AuthProvider } from "./context/AuthContext";
import AddNew from "./pages/Admin/new/AddNew";
import ReadMail from "./pages/Admin/mail/";
import GlobalStyles from "./styles/Global";
import Edit from "./pages/Admin/edit";
import EditPlace from "./pages/Admin/edit/EditPlace";

function App() {
  return (
    <AuthProvider>
      <Router basename="/holidaze">
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/enquiry" component={Enquiry} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/details/:id" component={Detail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/new" component={AddNew} />
            <Route exact path="/admin/edit" component={Edit} />
            <Route exact path="/admin/edit/:id" component={EditPlace} />
            <Route
              exact
              path="/admin/read-enquiries"
              component={ReadEnquiries}
            />
            <Route exact path="/admin/read-mail" component={ReadMail} />
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
