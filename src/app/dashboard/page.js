import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Admin Dashboard | Shake Solutions'
}

export default function DashboardAliasPage() {
  redirect('/admin')
}
