interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ type, placeholder, value, onChange }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border-2 border-[#3E3E3E] text-[#3E3E3E] p-4 rounded-none placeholder:text-[#3E3E3E] font-bold"
    />
  );
};

export default Input;
