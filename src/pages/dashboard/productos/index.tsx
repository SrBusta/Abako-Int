import React, { useEffect, useState } from 'react'
import { FaEdit, FaRegEdit } from 'react-icons/fa';
import { Button } from '~/modules/common/components/Button';
import { BaseModalProps, Modal } from '~/modules/common/components/Modal';
import { useModal } from '~/modules/common/hooks/useModal';
import { DashboardLayout } from '~/modules/common/layout/DashboardLayout'
import { RouterInputs, RouterOutputs, api } from '~/utils/api';
import { useForm } from 'react-hook-form';

type formAdd = RouterInputs["product"]["create"]

const Index = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [productUpdate, setproductUpdate] = useState<RouterOutputs["product"]["getAll"][number]>()

  const { data } = api.product.getAll.useQuery();

  const dataType = api.type.getAll.useQuery();

  const dataModel = api.model.getAll.useQuery();

  const dataBrand = api.brand.getAll.useQuery();

  const modal = useModal()

  const modalUpdate = useModal()

  const { product } = api.useContext();

  const { mutate } = api.product.create.useMutation({
    onSuccess: () => {
      modal.onClose();
    },
    onSettled: () => {
      product.invalidate();
    },
  });

  const { register, handleSubmit } = useForm<formAdd>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    const convertedData: formAdd = {
      ...data,
      type: parseInt(data.type.toString()),
      brand: parseInt(data.brand.toString()),
      model: parseInt(data.model.toString()),
      price: parseFloat(data.price.toString())
    };
    mutate(convertedData);
  });

  return (
    <DashboardLayout>
      <div className="p-5">

        <div className="mb-2">
          <span className="text-2xl"> Productos</span>

        </div>

        <Button onClick={modal.onOpen} >Agregar</Button>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="w-full p-4 overflow-x-auto flex">

          <table className="items-center justify-center ml-10 divide-y divide-gray-200 text-center">
            <thead className="bg-gray-50 dark:bg-neutral-700">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Producto</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Marca</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Modelo</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Editar</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 dark:bg-neutral-500">
              {data?.filter(item =>
                item.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
                item.productBrand?.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
              ).map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.productType?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.productBrand?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.productModel?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">S/ {item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><Button onClick={() => {
                    setproductUpdate(item)
                    modalUpdate.onOpen();

                  }}><FaRegEdit className='text-xl' /></Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={modal.isOpen} onClose={modal.onClose} className='w-4/12' titleHeader='Nuevo Producto'>

        <form onSubmit={onSubmit} className='p-6 flex flex-col gap-2'>
          <label>Nombre de producto: </label>
          <input type='text' {...register("name")} />

          <label>Tipo del producto: </label>
          <select {...register("type")} >
            {dataType.data?.map((type, index) => (
              <option key={index} value={type.id}>{type.name}</option>
            ))}
          </select>

          <label>Marca del producto: </label>
          <select {...register("brand")}>
            {dataBrand.data?.map((brand, index) => (
              <option key={index} value={brand.id}>{brand.name}</option>
            ))}
          </select>
          <label>Modelo del producto: </label>
          <select {...register("model")}>
            {dataModel.data?.map((model, index) => (
              <option key={index} value={model.id}>{model.name}</option>
            ))}
          </select>
          <label>Precio:</label>
          <input type='text' inputMode='decimal'{...register("price")} />
          <Button type='submit' className='w-1/5'>Registrar</Button>
        </form>

      </Modal>

      <UpdateModal isOpen={modalUpdate.isOpen} onClose={modalUpdate.onClose} data={productUpdate} />

    </DashboardLayout>

  )

}



type updateModalProps = BaseModalProps & { data?: RouterOutputs['product']['getAll'][number] }

type formUpdate = RouterInputs['product']['update']

const UpdateModal = ({ isOpen, onClose, data }: updateModalProps) => {

  const { product } = api.useContext();

  const dataType = api.type.getAll.useQuery();

  const dataModel = api.model.getAll.useQuery();

  const dataBrand = api.brand.getAll.useQuery();


  const { mutate, isLoading } = api.product.update.useMutation({
    onSuccess: () => {
      onClose();
    },
    onSettled: () => {
      product.invalidate();
    },
  });

  const { register, handleSubmit,reset } = useForm<formUpdate>({
        
  })

  useEffect(() => {
    reset({
      ...data,
      brand:data?.productBrand?.id,
      model:data?.productModel?.id,
      type:data?.productType?.id
    })
  }, [data?.id])
  

  const onSubmit = handleSubmit((datas) => {
    if(typeof data?.id === "undefined") return;
    const convertedData: formUpdate = {
      ...datas,
      id:data.id,
      type: parseInt(datas.type.toString()),
      brand: parseInt(datas.brand.toString()),
      model: parseInt(datas.model.toString()),
      price: parseFloat(datas.price.toString())
    };
    mutate(convertedData);
  });

  return (



    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} className='p-6 flex flex-col gap-2'>
        <label>Nombre de producto: </label>
        <input type='text' {...register("name")}  />

        <label>Tipo del producto: </label>
        <select {...register("type")} >
          {dataType.data?.map((type, index) => (
            <option key={index} value={type.id}>{type.name}</option>
          ))}
        </select>

        <label>Marca del producto: </label>
        <select {...register("brand")} >
          {dataBrand.data?.map((brand, index) => (
            <option key={index} value={brand.id}>{brand.name}</option>
          ))}
        </select>
        <label>Modelo del producto: </label>
        <select {...register("model")} >
          {dataModel.data?.map((model, index) => (
            <option key={index} value={model.id}>{model.name}</option>
          ))}
        </select>
        <label>Precio:</label>
        <input type='text' inputMode='decimal'{...register("price")} />
        <Button type='submit' className='w-1/5' isLoading={isLoading} >Actualizar</Button>
      </form>
    </Modal>

  )

}

export default Index