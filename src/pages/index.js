import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h5 style={{ textAlign: "center" }}>{session?.user?.name}</h5>
      <p style={{ textAlign: "center" }}>{session?.user?.email}</p>
    </div>
  );
};

export default HomePage;
