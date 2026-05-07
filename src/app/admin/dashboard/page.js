import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Admin Dashboard | Shake Solutions'
}

export default function AdminDashboardAliasPage() {
  redirect('/admin')
}
