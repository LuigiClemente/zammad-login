export const StepFive = ({ stepRefs, router, checkerRoute, stepperData }) => {
  return (
    <div>
      <div className="flex flex-row" key={'8step'}>
        <div className="hidden flex-col items-center md:flex">
          <div
            className="step-border step5 step5 mr-4 flex w-32 flex-col  items-center justify-center rounded border py-5 uppercase"
            ref={stepRefs[4]}
          >
            <div className="color5 text-3xl font-black ">{`${stepperData[4].step}`}</div>
            <div className="text-sm text-subTitleLM dark:text-neutral-200">{`${stepperData[4].title}`}</div>
          </div>
        </div>

        <div className="step-border step5 flex-auto rounded border">
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex-auto">
              <div className="pl-3 pt-3 text-sm font-normal uppercase text-neutral-200 md:hidden">
                <span className="font-black dark:text-white">{`${stepperData[4].step}`}</span> -{' '}
                {`${stepperData[4].title}`}
              </div>
              <div className="font color color5  flex w-fit flex-row items-center p-3 text-3xl">
                {/* <Beaker /> */}
                {`${stepperData[4].title}`}
              </div>
              <div className="color5 px-3 pb-6 text-txt">{`${stepperData[4].description}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
