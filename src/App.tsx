import { Routes, Route, Navigate } from "react-router-dom";
import { useAppState } from "hooks";
import Home from "app/page";
import Login from "app/login/page";
import SignUp from "app/signup/page";
import Dashboard from "app/dashboard/page";

const App = () => {
  const {
    auth: { user },
  } = useAppState();

  if (user) {
    return (
      // <AdminLayout>
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/dashboard" /> : <Navigate to="login" />
            }
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="../auth" />}
          />
        </Routes>
      // </AdminLayout>
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
