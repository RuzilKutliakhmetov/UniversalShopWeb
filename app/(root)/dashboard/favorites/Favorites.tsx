'use client'

import { Catalog } from '@/components/ui/catalog/Catalog'

import { useProfile } from '@/hooks/useProfile'

export function Favorites() {
	const { user } = useProfile()
	console.log(user)
	if (!user) return null

	return (
		<div className='my-6'>
			<Catalog title='Избранное' products={user.favorites} />
		</div>
	)
}
