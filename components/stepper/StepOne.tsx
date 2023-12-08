export const StepOne = ({ stepRefs, checkerRoute, stepperData }) => {
  return (
    <div>
      <div className="flex flex-row" key={'1step'}>
        <div className="hidden flex-col items-center md:flex">
          <div
            className="step-border step1 mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase"
            role="button"
            tabIndex={0}
            ref={stepRefs[0]}
            onKeyDown={() => {
              checkerRoute()
            }}
            onClick={() => {
              checkerRoute()
            }}
          >
            <div className="color color1 text-3xl font-black">{`${stepperData[0].step}`}</div>
            <div className="color1 text-sm text-subTitleLM">{`${stepperData[0].title}`}</div>
          </div>
          <div className="h-full border-l-4 border-transparent">
            <div className="step-border step1-border step1  animate-color-change mr-4 h-full border-l-4 border-solid"></div>
          </div>
        </div>
        <div className="step-border step1 flex-auto rounded border ">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex-auto">
              <div className="pl-3 pt-3 text-sm font-normal uppercase text-neutral-200 md:hidden">
                <span className="font-black dark:text-white">{`${stepperData[0].step}`}</span> -{' '}
                {`${stepperData[0].title}`}
              </div>
              <div className="font color1 flex w-fit flex-row items-center p-3 text-3xl">
                {/* <Folder /> */}
                {`${stepperData[0].title}`}
              </div>
              <div className="color1 px-3 pb-6 text-txt color1">{`${stepperData[0].description}`}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start" key={'2step'}>
        <div className="border-r-4 border-t-4 border-transparent ">
          <div className="step-border step1 ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-solid "></div>
        </div>
        <div className="step1 flex-auto border-t-4 border-transparent ">
          <div className="step-border step1 animate-color-change h-16 border-b-4 border-solid  "></div>
        </div>
        <div className="step-border step1 mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-solid  "></div>
      </div>
    </div>
  )
}
