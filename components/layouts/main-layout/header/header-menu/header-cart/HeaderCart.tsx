import { Button } from '@/components/ui/Button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/Sheet'

import { PUBLIC_URL } from '@/config/url.config'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'
import { ICartItem } from '@/shared/types/cart.interface'
import { formatPrice } from '@/utils/string/format-price'
import { useRouter } from 'next/navigation'
import { CartItem } from './cart-item/CartItem'
import { useCheckout } from './cart-item/useCheckout'
import styles from './HeaderCart.module.scss'
// import { useCheckout } from './useCheckout'

export function HeaderCart() {
	const router = useRouter()

	const { createPayment, isLoadingCreate } = useCheckout()
	const { user } = useProfile()

	const { items, total } = useCart()

	const handleClick = () => {
		user ? createPayment() : router.push(PUBLIC_URL.auth())
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>Корзина</Button>
			</SheetTrigger>
			<SheetContent className={styles.cart}>
				<SheetHeader>
					<SheetTitle>Корзина товаров</SheetTitle>
				</SheetHeader>
				<div className={styles.items}>
					{items.length ? (
						items.map((item: ICartItem) => (
							<CartItem item={item} key={item.id} />
						))
					) : (
						<div className={styles.not_found}>Корзина пустая!</div>
					)}
				</div>
				{items.length ? (
					<>
						<div className={styles.total}>
							Итого к оплате: {formatPrice(total)}
						</div>
						<Button
							onClick={handleClick}
							variant='primary'
							disabled={isLoadingCreate}
						>
							Перейти к оплате
						</Button>
					</>
				) : null}
			</SheetContent>
		</Sheet>
	)
}
