'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IMenuItem } from './menu.interface'
import styles from './Navigation.module.scss'

interface MenuItemProps {
	route: IMenuItem
}

export default function MenuItem({ route }: MenuItemProps) {
	const pathname = usePathname()

	return (
		<Link
			href={route.link}
			className={cn(styles.route, {
				[styles.active]: pathname === route.link,
			})}
		>
			<route.icon />
			{route.value}
		</Link>
	)
}
