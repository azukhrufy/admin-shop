interface CardProps{
    height?: string;
    className?: string;
    children: React.ReactNode;
}

const DeallCard = ({height,className, children} : CardProps) => {
  return (
    <div className={`deall-card-container h-${height} ${className}`}>
      {children}
    </div>
  );
};

export default DeallCard;
