import { auth } from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>

      <h5 style={{ textAlign: "center" }}>
        {session?.user?.name || user?.displayName}
      </h5>
      <p style={{ textAlign: "center" }}>
        {session?.user?.email || user?.email}
      </p>
    </div>
  );
};

export default HomePage;
