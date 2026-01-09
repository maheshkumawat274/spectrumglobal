import { cn } from "../../utils/cn";


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
