import { Button } from '@/components/ui/Button'
import { Heading } from '@/components/ui/Heading'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'

import styles from './HeaderCart.module.scss'
// import { useCheckout } from './useCheckout'

export function HeaderCart() {
	// const router = useRouter()

	// const { createPayment, isLoadingCreate } = useCheckout()
	// const { user } = useProfile()

	// const { items, total } = useCart()

	// const handleClick = () => {
	// 	user ? createPayment() : router.push(PUBLIC_URL.auth())
	// }

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>Корзина</Button>
			</SheetTrigger>
			<SheetContent className={styles.cart}>
				<Heading title='Корзина товаров' className='text-xl' />
			</SheetContent>
		</Sheet>
	)
}

// <div className={styles.items}>
// {items.length ? (
// 	items.map((item: ICartItem) => (
// 		<CartItem item={item} key={item.id} />
// 	))
// ) : (
// 	<div className={styles.not_found}>Корзина пустая!</div>
// )}
// </div>
// {items.length ? (
// <>
// 	<div className={styles.total}>
// 		Итого к оплате: {formatPrice(total)}
// 	</div>
// 	{/* <Button
// 		onClick={handleClick}
// 		variant='primary'
// 		disabled={isLoadingCreate}
// 	>
// 		Перейти к оплате
// 	</Button> */}
// </>
// ) : null}
