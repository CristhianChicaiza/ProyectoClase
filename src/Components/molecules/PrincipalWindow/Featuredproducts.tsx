import Text from '../../atoms/FooterText';

interface CharacteristicProps {
    textA: string;
    textB: string;
    textC: string;
    alt: string;
    src: string;
}

const FeaturedProduct: React.FC<CharacteristicProps> = ({ textA, textB, textC, alt, src }) => {
    return (


        <div className='flex items-center p-4'>
            <a href="#" className="inline-block group bg-white">
                <div className='flex items-center hover:bg-yellow-300 gap-2 flex-col'>
            <img className='w-[150px] h-[150px]' alt={alt} src={src}/>
            <div className='flex flex-col items-start justify-center'>
                <Text text={textA} variant="title" />
                <Text text={textB} variant="subtitle" />
                <Text text={textC} variant="subtitle" />
            </div>
            </div>
            </a>
        </div>
        
    );
};

export default FeaturedProduct;
