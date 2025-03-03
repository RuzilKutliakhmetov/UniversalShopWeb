import type { Metadata } from 'next';
import Home from './Home';

export const metadata: Metadata = {
	title: 'Выш шопинг, ваше удовольствие - все в одном месте',
};

export default function HomePage() {
	return <Home />;
}
