import { Routes, Route, Navigate } from "react-router-dom";
import { useAppState } from "hooks";
import Home from "app/page";
import Login from "app/login/page";
import SignUp from "app/signup/page";
import Dashboard from "app/dashboard/page";
import ProviderLayout from "components/Layouts/Provider";
import EmailComposer from "app/Provider/EmailComposer";

const App = () => {
  const {
    auth: { user },
  } = useAppState();

  if (user) {
    return (
      <ProviderLayout>
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/campaign" /> : <Navigate to="login" />
            }
          />
          <Route
            path="/campaign"
            element={user ? <Dashboard /> : <Navigate to="../auth" />}
          />
          <Route
            path="/email-composer"
            element={user ? <EmailComposer /> : <Navigate to="../auth" />}
          />
        </Routes>
      </ProviderLayout>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="../" />} />
    </Routes>
  );
};
export default App;
