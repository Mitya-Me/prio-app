import { ReviewProps } from "./Review.props";
import styles from './Card.module.css';
import cn from 'classnames';

export const Review = ({review, className, ...props}: ReviewProps):JSX.Element  => { 
	return (
		<div className={cn(styles.review, className)}
			{...props}
		>
			
		</div>
		
	)
}