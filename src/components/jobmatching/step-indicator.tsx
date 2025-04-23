export const StepIndicator = ({
    step=1
}:{
    step? : number
}) => {
    return(
        <div className="mx-auto w-fit flex gap-3 items-center">
            <div className="flex gap-3 flex-col justify-center items-center">
                <div className={`w-9 aspect-square rounded-full bg-[#3785C6] flex justify-center items-center text-white font-bold text-lg`}>1</div>
                <h4 className={`text-lg`}>Temukan gayamu</h4>
            </div>
            <div className={`h-[1px] bg-[#3785C6] w-12`}/>
            <div className={`flex gap-3 flex-col justify-center items-center ${step==2||step==3?'opacity-100':'opacity-50'}`}>
                <div className={`w-9 aspect-square rounded-full bg-[#3785C6] flex justify-center items-center text-white font-bold text-lg`}>2</div>
                <h4 className={`text-lg`}>Lengkapi identitas</h4>
            </div>
            <div className={`h-[1px] bg-[#3785C6] w-12 ${step==2||step==3?'opacity-100':'opacity-50'}`}/>
            <div className={`flex gap-3 flex-col justify-center items-center ${step==3?'opacity-100':'opacity-50'}`}>
                <div className={`w-9 aspect-square rounded-full bg-[#3785C6] flex justify-center items-center text-white font-bold text-lg`}>3</div>
                <h4 className={`text-lg`}>Unduh CV-mu</h4>
            </div>
        </div>
    )
};
