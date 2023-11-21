import AdminLayout from "../../../Layout/AdminLayout";
import Categories from "../../../components/Dashboard/Categories/Categories";
import PrivateRoutes from "../../../routes/PrivateRoutes";

function index() {
    return (
      <PrivateRoutes>
          <AdminLayout title={'Categories'}>
            <Categories />
        </AdminLayout>
      </PrivateRoutes>
    );
}

export default index;