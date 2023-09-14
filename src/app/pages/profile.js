import { AppFooter, AppHeader, AppLayout } from '@/components';
import { Profile } from '@/features';

export function ProfilePage() {

  return AppLayout({
    header: AppHeader({ title: 'Profile' }),
    content: Profile(),
    footer: AppFooter(),
  });
}
