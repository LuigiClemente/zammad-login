export const StepThree = ({ stepRefs, router, checkerRoute, stepperData }) => {
  return (
    <div>
      <div className="flex flex-row" key={'5step'}>
        <div className="color3 hidden flex-col items-center md:flex">
          <div
            className="step-border step3 mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
            role="button"
            tabIndex={0}
            ref={stepRefs[2]}
            onKeyDown={() => {
              router.push('/cube')
            }}
            onClick={() => {
              router.push('/cube')
            }}
          >
            <div className="color3 color color3 text-3xl font-black">{`${stepperData[2].step}`}</div>
            <div className="color3 text-sm text-subTitleLM">{`${stepperData[2].title}`}</div>
          </div>
          <div className="h-full border-l-4 border-transparent">
            <div className="animate-color-change step-border step3 mr-4 h-full border-l-4 border-solid"></div>
          </div>
        </div>
        <div className="step-border step3 flex-auto rounded border">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex-auto">
              <div className="pl-3 pt-3 text-sm font-normal uppercase text-neutral-200 md:hidden">
                <span className="color color3 font-black">{`${stepperData[2].step}`}</span> -{' '}
                {`${stepperData[2].title}`}
              </div>
              <div className="font color  color3 flex w-fit flex-row items-center p-3 text-3xl">
                {/* <Ambulance /> */}
                <span className="font color color3 ml-2 text-3xl">{`${stepperData[2].title}`}</span>
              </div>
              <div className="px-3 pb-6 text-txt color3">
                {`${stepperData[2].description}`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start">
        <div className="border-r-4 border-t-4 border-transparent">
          <div className="step-border step3 ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-solid"></div>
        </div>
        <div className="flex-auto border-t-4 border-transparent">
          <div className="animate-color-change step-border step3 h-16 border-b-4 border-solid"></div>
        </div>
        <div className="step-border step3 mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-solid"></div>
      </div>
    </div>
  )
}
