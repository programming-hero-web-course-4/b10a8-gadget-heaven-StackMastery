
import RatingIcon from '@/assets/icon/rating.svg';
import UnfillRating from '@/assets/icon/unfillrating.svg';

const Rating = ({children}) => {
    return (
        <>
            <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }, (_, index) => (
                    <img
                    key={index}
                    src={index < children ? RatingIcon : UnfillRating}
                    alt={index < children ? "Filled Star" : "Unfilled Star"}                    
                    className="cursor-pointer w-4 h-4"
                />
                ))}
                <span className='bg-slate-100 p-1 px-2 rounded-full text-off-white'>
                    {children}
                </span>
            </div>
        </>
    );
}

export default Rating   