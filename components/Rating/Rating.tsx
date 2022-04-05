import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import StarIcon from "./star.svg"


export const Rating = forwardRef(({rating,setRating,isEditable = false,...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => { 
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => { 
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => { 
			return (
					<StarIcon
						className={cn({
							[styles.filled]: i < currentRating,
							[styles.editable]: isEditable
						})}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(i + 1)}
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
					/>
			)
		})

		setRatingArray(updatedArray)
	}

	const changeDisplay = (i: number) => { 
		if (!isEditable) return;

		constructRating(i)
	}

	const onClick = (i: number) => {
		if (!isEditable || !setRating) return;

		setRating(i)
	}

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code !== 'Space' || !setRating) return
		setRating(i)
	}

	return (
		<div {...props} ref={ref}>
			{ratingArray.map((star, i) => (<span className={styles.wrapper} key={i}> { star } </span>))}
		</div>
	)
});
