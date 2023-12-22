export const StepFour = ({ stepRefs, router, checkerRoute, stepperData }) => {
  return (
    <div>
      <div className="flex flex-row-reverse" key={'6step'}>
        <div className="hidden flex-col items-center md:flex">
          <div
            className=" step-border step4 borde ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
            ref={stepRefs[3]}
          >
            <div className="color4 text-3xl font-black ">{`${stepperData[3].step}`}</div>
            <div className="color4 text-sm text-subTitleLM">{`${stepperData[3].title}`}</div>
          </div>
          <div className="h-full border-r-4 border-transparent">
            <div className="animate-color-change step-border step4 ml-4 h-full border-l-4 border-solid"></div>
          </div>
        </div>
        <div className="step-border step4 flex-auto rounded border">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex-auto">
              <div className="pl-3 pt-3 text-sm font-normal uppercase text-neutral-200 md:hidden">
                <span className="color color4 font-black">{`${stepperData[3].step}`}</span> -{' '}
                {`${stepperData[3].title}`}
              </div>
              <div className="font text-3x flex  w-fit flex-row items-center p-3">
                {/* <Clinic /> */}
                <span className="font color color4 ml-2 text-3xl">{`${stepperData[3].title}`}</span>
              </div>
              <div className="color4 px-3 pb-6 text-txt">{`${stepperData[3].description}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-start" key={'7step'}>
        <div className="border-l-4 border-t-4 border-transparent">
          <div className="step-border step4 mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-solid"></div>
        </div>
        <div className="flex-auto border-t-4 border-transparent">
          <div className="animate-color-change step-border step4 h-16 border-b-4 border-solid"></div>
        </div>
        <div className="step-border step4 ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-solid"></div>
      </div>
    </div>
  )
}
