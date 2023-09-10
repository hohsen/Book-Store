import { AppHeader, AppLayout } from '@/components';
import { Favorite } from '@/features';

export function FavotirePage() {

  return AppLayout({
    header: AppHeader({ title: 'Favorite' }),
    content: Favorite(),
  });
}
