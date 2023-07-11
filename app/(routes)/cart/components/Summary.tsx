"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pagamento completado");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Ops! Algo deu errado");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });
    window.location = response.data.url;
    console.log(window.location);
  };

  return (
    <div
      className='mt-16 rounded-lg bg-gray-50 px-4py6
  sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
    >
      <h2 className='text-lg font-medium text-gray-900'>Resumo do pedido</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Total do pedido</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        className='w-full mt-6'
        onClick={onCheckout}
      >
        Finalizar Compra
      </Button>
    </div>
  );
};
export default Summary;
