import Link from "next/link";
import { DarkLayput } from "../../components/layouts/DarkLayput";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Pricing Page
        <code className="code">pages/pricing.jsx</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayput>{page}</DarkLayput>
    </MainLayout>
  );
};
