import { AppHeader, AppLayout } from '@/components';
import { Cart } from '@/features';

export function CartPage() {

  return AppLayout({
    header: AppHeader({ title: 'Cart' }),
    content: Cart(),
  });
}
