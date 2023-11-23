import { useRouter } from "next/router";
import passwordHash from "password-hash";
function PrivateRoutes({ children }) {
    const router = useRouter()
  // local data
  const localData = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("login")
  );
  const password = passwordHash.verify(
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
    localData?.local
  );
  const email = passwordHash.verify(
    process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    localData?.data
  );
  if (password && email) {
    return  children 
  }else{
  return typeof window!=='undefined' && (window.location.href = "/login")
  }
}

export default PrivateRoutes;
