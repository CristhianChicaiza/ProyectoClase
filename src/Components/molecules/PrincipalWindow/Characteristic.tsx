import Text from '../../atoms/Twotext';

interface CharacteristicProps {
    text: string;

    alt:string;
    src: string;
}
const Characteristic: React.FC<CharacteristicProps> = ({ text, alt, src}) => {
    return (
        <div className='inline-flex px-2 py-2 justify-center gap-2 bg-white'>
        <img className='w-[50px] h-[50px]' alt={alt} src={src}/>
        <div className='flex flex-col items-start justify-center'>
            <Text text={text}/>
        </div>
        </div>
    );
    }
export default Characteristic;
