import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@/type";
import { LayoutAtype } from "@/components/layout";

const Page: NextPageWithLayout = () => {
  return <div>Page</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAtype>{page}</LayoutAtype>;
};

export default Page;
