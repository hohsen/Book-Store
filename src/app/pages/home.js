import { AppFooter, AppHeader, AppLayout } from '@/components';

export function HomePage() {
  return AppLayout({
    header: AppHeader({ title: 'BOOKSTORE' }),
    footer: AppFooter(),
  });
}
