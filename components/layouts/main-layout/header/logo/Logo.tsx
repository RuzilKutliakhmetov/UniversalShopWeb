import { PUBLIC_URL } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'

export default function Logo() {
	return (
		<Link href={PUBLIC_URL.home()} className={styles.logo}>
			<Image src='/images/logo.svg' alt={SITE_NAME} width={35} height={35} />
			<div>UniversalShop</div>
		</Link>
	)
}
