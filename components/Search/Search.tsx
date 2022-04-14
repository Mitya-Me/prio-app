import { SearchProps } from "./Search.props";
import styles from './Search.module.css';
import cn from 'classnames';
import { Button } from './../Button/Button';
import { Input } from './../Input/Input';
import { useState } from "react";
import GlassIcon from './glass.svg'
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => { 
	const [search, setSearch] = useState<string>('')
	const router = useRouter()

	const gotToSearch = () => { 
		router.push({
			pathname: '/search/',
			query: {
				q: search
			}
		})
	}

	const handleKeyDown = (e: KeyboardEvent) => { 
		if (e.key == 'Enter') { 
			gotToSearch()
		}
	}

	return (
		<form className={cn(className, styles.search)} {...props} role="search">
			<Input
				className={styles.input}
				placeholder='Search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}	
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={gotToSearch}
				aria-label='Искать по сайту'
			>
				<GlassIcon/>
			</Button>
		</form>
}