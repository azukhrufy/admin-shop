interface FooterProps {
  leftContent?: React.ReactNode;
  rightContent?: String;
}

const Footer = ({ leftContent, rightContent }: FooterProps) => {
  return (
    <div className="deall-footer">
      <div className="deall-left-footer">{leftContent}</div>
      <div className="deall-right-footer">{rightContent}</div>
    </div>
  );
};

export default Footer;
