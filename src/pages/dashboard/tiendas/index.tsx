import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/modules/common/components/Button";
import { Modal } from "~/modules/common/components/Modal";
import { useModal } from "~/modules/common/hooks/useModal";
import { DashboardLayout } from "~/modules/common/layout/DashboardLayout";
import { RouterInputs, api } from "~/utils/api";

type formAdd = RouterInputs["store"]["create"];

const Index = () => {
  const { data } = api.store.getAll.useQuery();

  const { store } = api.useContext();

  const { isOpen, onClose, onOpen } = useModal();

  const { mutate } = api.store.create.useMutation({
    onSuccess: () => {
      onClose();
    },
    onSettled: () => {
      store.invalidate();
    },
  });
  const { register, handleSubmit } = useForm<formAdd>({
    defaultValues: {
      name: "",
      address: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <DashboardLayout>
      <Button onClick={onOpen}>ABRIRd</Button>
      <div className="grid grid-cols-3 gap-3 p-3">
        {data?.map((store) => (
          <Link
            href={{
              pathname: "/dashboard/tiendas/[id]",
              query: { id: store.id },
            }}
            key={store.id}
            className="border p-2 "
          >
            <div className="">
              <p>{store.name}</p>
              <p>{store.address}</p>
            </div>
          </Link>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label>NOMBRE</label>
          <input {...register("name")} />
          <label>DIRECCIÓN</label>
          <input {...register("address")} />
          <Button type="submit">ENVIAR</Button>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Index;
