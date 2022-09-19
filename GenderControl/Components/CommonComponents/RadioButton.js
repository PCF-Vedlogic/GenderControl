import { ChoiceGroup } from 'office-ui-fabric-react'

const RadioButton = ({ label, radioOptions, onControlChange, selectedValue }) => {
  return (
    <>
      <ChoiceGroup
        label={label}
        options={radioOptions}
        selectedKey={selectedValue}
        onChange={onControlChange}
      />
    </>
  )
}
export default RadioButton