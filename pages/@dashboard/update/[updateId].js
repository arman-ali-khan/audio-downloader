import AdminLayout from "../../../Layout/AdminLayout";
import Update from "../../../components/Dashboard/Update/Update";
import PrivateRoutes from "../../../routes/PrivateRoutes";

function updateId() {
    return (
        <PrivateRoutes>
            <AdminLayout title={'Update posts'}>
            <Update />
        </AdminLayout>
        </PrivateRoutes>
    );
}

export default updateId;