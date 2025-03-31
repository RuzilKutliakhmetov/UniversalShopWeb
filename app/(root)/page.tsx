import { productService } from '@/services/product.service'
import type { Metadata } from 'next'
import Home from './Home'

export const metadata: Metadata = {
	title: 'Выш шопинг, ваше удовольствие - все в одном месте',
}

export const revalidate = 60

async function getProducts() {
	return (await productService.getMostPopular()).slice(0, 6)
}

export default async function HomePage() {
	const data = await getProducts()
	return <Home products={data} />
}
