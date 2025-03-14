import { RadioGroup, Radio } from "@nextui-org/react";

const RadioInput = ({stateSetFn}) => {
    const onchangeEvent=(e)=>{
        const value=e.target.value
        if(value==="yes"){
            stateSetFn(true)
        } else{
            stateSetFn(false)
        }
    }
  return (
    <label htmlFor={"FlashSel"} className="text-start w-full ">
      <span className="font-semibold text-lg">Flash Sale?</span>
      <RadioGroup onChange={onchangeEvent} id="FlashSel" color="default" orientation="horizontal">
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
    </label>
  );
};

export default RadioInput;
