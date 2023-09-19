import { AppFooter, AppHeader, AppLayout } from '@/components';
import { Subscribe } from '@/features/subscribe/subscribe';

export function HomePage() {
  return AppLayout({
    header: AppHeader({ title: 'BOOKSTORE' }),
    content: Subscribe(),
    footer: AppFooter(),
  });
}
