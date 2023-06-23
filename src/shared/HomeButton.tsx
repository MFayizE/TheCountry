interface Props {
  region: string;
  selectedRegion: string;
  onClick: (region: string) => void;
}
const HomeButton = ({ region, selectedRegion, onClick }: Props) => {
  const isSelected = selectedRegion === region;
  const buttonClassName = isSelected
    ? "mx-2 py-2 px-4 text-black border-b-2 border-black"
    : "mx-2 py-2 px-4 text-gray-500";

  return (
    <button className={buttonClassName} onClick={() => onClick(region)}>
      {region}
    </button>
  );
};

export default HomeButton;
