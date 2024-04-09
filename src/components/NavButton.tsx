interface NavButtonProps {
    label: string;
    selected: boolean;
    handleClick: (label: string) => void;
}
  
const NavButton: React.FC<NavButtonProps> = ({label, selected, handleClick}) => {
    return (
      <button
        className={` flex items-center ${selected ? 'text-white' : 'text-[#c4d1ec]'}`}
        onClick={() => handleClick(label)}
      >
        <hr className={`h-1 bg-[#c4d1ec] hover:bg-white border-0 rounded hover:w-60 mr-6 ${selected ? 'w-60' : 'w-40'} hover:w-60 transition ease-in duration-300`}/>
        <h2 className='text-2xl font-bold hover:text-white'>{label}</h2>
      </button>
    )
}

export default NavButton;