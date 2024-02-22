import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <>
      <Page
        title="Admin Dashboard"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/adminDashboard",
            icon: <FaHome />,
          },
        ]}
      >
        <div>Admin Dashboard</div>
      </Page>
    </>
  );
};

export default AdminDashboard;
