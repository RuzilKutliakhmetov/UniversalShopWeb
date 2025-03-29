import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ILastUsers } from '@/shared/types/statistics.interface'
import { formatPrice } from '@/utils/string/format-price'
import Image from 'next/image'
import styles from './MiddleStatistics.module.scss'
interface OverviewProps {
	data: ILastUsers[]
}

export default function LastUsers({ data }: OverviewProps) {
	return (
		<Card>
			<CardHeader className={styles.header}>
				<CardTitle>Прибыль</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map(user => (
						<div className={styles.user} key={user.id}>
							<Image
								src={user.picture}
								alt={user.name}
								width={40}
								height={40}
							/>
							<div className={styles.info}>
								<p className={styles.name}>{user.name}</p>
								<p>{user.email}</p>
							</div>
							<div className={styles.total}>+{formatPrice(user.total)}</div>
						</div>
					))
				) : (
					<div>У этого магазина нет покупателей...</div>
				)}
			</CardContent>
		</Card>
	)
}
