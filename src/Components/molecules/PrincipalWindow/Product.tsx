import Text from '../../atoms/FooterText';

interface CharacteristicProps {
    textA: string;
    textB: string;
    alt: string;
    src: string;
}

const ProductCategories: React.FC<CharacteristicProps> = ({ textA, textB, alt, src }) => {
    return (


        <div>
            <a href="#" className="inline-block group">
                <div className='flex items-center hover:bg-yellow-300 gap-2'>
            <img className='w-[100px] h-[100px]' alt={alt} src={src}/>
            <div className='flex flex-col items-start justify-center'>
                <Text text={textA} variant="title" />
                <Text text={textB} variant="subtitle" />
            </div>
            </div>
            </a>
        </div>
        
    );
};

export default ProductCategories;
