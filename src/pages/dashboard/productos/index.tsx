import React from 'react'
import { DashboardLayout } from '~/modules/common/layout/DashboardLayout'
import { api } from '~/utils/api';

const Index = () => {

  const { data } = api.product.getAll.useQuery();

  return (
    <DashboardLayout>
      <div className="p-5">

        <div>
          <span> Productos</span>
        </div>
      
        <div className="w-full p-4 overflow-x-auto flex">
          <table className="items-center justify-center ml-10 divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-neutral-700">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Producto</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Marca</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Modelo</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Precio</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-neutral-500">
              {data?.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.productType?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.productBrand?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.productModel?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">S/ {item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </DashboardLayout>
  )
}

export default Index