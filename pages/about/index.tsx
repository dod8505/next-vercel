import Link from "next/link";
import { DarkLayput } from "../../components/layouts/DarkLayput";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        About Page
        <code className="code">pages/about.jsx</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayput>{page}</DarkLayput>
    </MainLayout>
  );
};
