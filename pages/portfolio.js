import Portfolio from "../components/Work/Work";
import DefaultLayout from "../layouts";

export default function PortfolioPage() {
  return (
    <div>
      <DefaultLayout>
        <Portfolio portfolio={true} />
      </DefaultLayout>
    </div>
  );
}
