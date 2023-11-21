import AdminLayout from "../../../Layout/AdminLayout";
import CreateCategory from "../../../components/Dashboard/Categories/CreateCategory";
import PrivateRoutes from "../../../routes/PrivateRoutes";

function create() {
    return (
       <PrivateRoutes>
         <AdminLayout title={'Create category'}>
            <CreateCategory />
        </AdminLayout>
       </PrivateRoutes>
    );
}

export default create;