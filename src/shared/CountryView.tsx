interface Props {
  name: string;
  region: string;
  flag: string;
}
const CountryView = ({ name, region, flag }: Props) => {
  return (
    <div className="flex p-4 border-2 border-[#3E3E3E] items-center gap-8">
      <div>
        <img
          src={flag}
          className="object-cover w-32 h-32"
          alt={`${name} Flag`}
        />
      </div>
      <div>
        <div className="font-semibold text-[24px] text-[#3D3D3D]">{name}</div>
        <div className=" text-[16px] text-[#6F6F6F]">{region}</div>
      </div>
    </div>
  );
};

export default CountryView;
