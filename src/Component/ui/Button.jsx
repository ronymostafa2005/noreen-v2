const Button = ({ children, onClick, className, variant }) => {
  return (
    <button onClick={onClick} className={`button ${variant} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

  