
import react from '../../assets/react.svg';
import close from '../../assets/close.svg';
function Alert(){
    return (
   <>
   <div className='w-full max-w-md mx-auto  flex items-center justify-center gap-8 bg-red-100 border border-red-700 text-yellow-900 px'>
   <img className="" src={react} alt="icon Alert" />
   <div className='flex flex-col items-start justify-center'>
   <p className='text-sm'>Alert</p>
   <p className='text-xs'>Warning in progress pages </p>
    </div>
      <img className=" items-center justify-center" src={close} alt="Close Alert" />
   </div>
   </>
    )
}
export default Alert;