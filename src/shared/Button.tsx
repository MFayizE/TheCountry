interface Props {
    label: string;
    onClick: () => void;
  }
  
  const Button = ({ label, onClick }: Props) => {
    return (
      <button
        className="w-full h-14 bg-[#3C3C3C] text-white font-semibold text-[16px] rounded-none"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;