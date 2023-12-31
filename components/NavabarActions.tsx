'use client';

import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Button from '@/components/ui/Button';
import useCart from '@/hooks/useCart';
import { ModeToggle } from './ui/ThemeToggle';

const NavabarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <ModeToggle />
      <Button
        onClick={() => router.push('/cart')}
        className='flex items-center rounded-full bg-black dark:bg-slate-600 px-4 py-2'
      >
        <ShoppingBag
          size={20}
          color='white'
        />
        <span className='ml-2 text-sm font-medium text-white'>{cart.items.length}</span>
      </Button>
    </div>
  );
};
export default NavabarActions;
