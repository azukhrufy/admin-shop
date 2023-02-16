interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
    height?: string;
    className?: string;
    children: React.ReactNode;
}

const DeallCard = ({height,className, children, ...defaultProps} : CardProps) => {
  return (
    <div className={`deall-card-container h-${height} ${className}`} {...defaultProps}>
      {children}
    </div>
  );
};

export default DeallCard;
