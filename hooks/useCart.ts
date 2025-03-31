import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const items = useTypedSelector(state => state.cart.items)

	const total = items.reduce(
		(acc: number, item: { price: number; quantity: number }) =>
			acc + item.price * item.quantity,
		0
	)

	return { items, total }
}
