import "animate.css";
import Layout from "./components/layout";
import AppRoutes from "./AppRoutes";

function App() {
  // const [loggedInUser] = useAtom(meUser);

  return (
    <>
      <main>
        <Layout>
          <AppRoutes />
        </Layout>
        {/* <SecurityLayout>
          {loggedInUser?.[0]?._id ? (
            <>
              <Layout>
                <AppRoutes />
              </Layout>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<PublicRoutes />}>
                <Route path="auth/login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="set-password" element={<NewPassword />} />
              </Route>
            </Routes>
          )}
        </SecurityLayout>
        <div className="hidden">
          <Routes>
            <Route path="/" element={<PublicRoutes />}>
              <Route path="auth/login" element={<Login />} />
            </Route>
          </Routes>
        </div> */}
      </main>
    </>
  );
}

export default App;
