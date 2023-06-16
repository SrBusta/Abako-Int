import { useRouter } from "next/router";
import React from "react";
import { useGetQueryParam } from "~/modules/common/hooks/useGetQueryParam";
import { DashboardLayout } from "~/modules/common/layout/DashboardLayout";
import { api } from "~/utils/api";

const Index = () => {
  const id = useGetQueryParam("id");

  const { back } = useRouter();
  //   console.log(id);
  const {} = api.store.getOne.useQuery(
    {
      id: parseInt(id as string),
    },
    {
      enabled: typeof id === "string" && typeof id !== "undefined",
      onSettled: (data) => {
        if (!data) back();
      },
    }
  );
  return <DashboardLayout>{id}</DashboardLayout>;
};

export default Index;
