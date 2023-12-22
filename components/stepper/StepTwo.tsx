export const StepTwo = ({ stepRefs, router, checkerRoute, stepperData }) => {
  return (
    <div>
      <div className="flex flex-row-reverse" key={'3step'}>
        <div className="hidden flex-col items-center md:flex">
          <div
            className="step-border step2 ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
            role="button"
            ref={stepRefs[1]}
            tabIndex={0}
            onKeyDown={() => {
              router.push('/tags')
              checkerRoute()
            }}
            onClick={() => {
              router.push('/tags')
              checkerRoute()
            }}
          >
            <div className="color2 text-3xl font-black">{`${stepperData[1].step}`}</div>
            <div className="color2 text-sm">{`${stepperData[1].title}`}</div>
          </div>
          <div className="h-full border-r-4 border-transparent">
            <div className="animate-color-change step-border step2 ml-4 h-full border-l-4 border-solid"></div>
          </div>
        </div>
        <div className="step-border step2 flex-auto rounded border">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex-auto">
              <div className="color2 pl-3 pt-3 text-sm font-normal uppercase md:hidden">
                <span className="font-black dark:text-white">{`${stepperData[1].step}`}</span> -{' '}
                {`${stepperData[1].title}`}
              </div>
              <div className="font flex  w-fit flex-row items-center p-3 text-3xl">
                {/* <Medicine /> */}
                <span className="font color2 ml-2 text-3xl">{`${stepperData[1].title}`}</span>
              </div>
              <div className="color2 px-3 pb-6 text-txt">{`${stepperData[1].description}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-start" key={'4step'}>
        <div className="border-l-4 border-t-4 border-transparent">
          <div className="step-border step2 mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-solid"></div>
        </div>
        <div className="flex-auto border-t-4 border-transparent">
          <div className="step-border step2 animate-color-change h-16 border-b-4 border-solid"></div>
        </div>
        <div className="step-border step2 ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-solid "></div>
      </div>
    </div>
  )
}
