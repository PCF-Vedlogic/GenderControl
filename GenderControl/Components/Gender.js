import React from 'react'
import RadioButton from './CommonComponents/RadioButton'

const Gender = ({ selectedValue, onChange }) => {
  const options = [
    {
      key: 1,
      imageSrc: 'https://vedlogicsol.sharepoint.com/:i:/r/Shared%20Documents/PcfVedlogic/PCF%20Gender%20Control/Images/male.png?csf=1&web=1&e=Zf0A41',
      imageAlt: 'Male',
      selectedImageSrc: 'https://vedlogicsol.sharepoint.com/:i:/r/Shared%20Documents/PcfVedlogic/PCF%20Gender%20Control/Images/male.png?csf=1&web=1&e=Zf0A41',
      imageSize: { width: 32, height: 32 },
      text: 'Male'
    },
    {
      key: 2,
      imageSrc: 'https://vedlogicsol.sharepoint.com/:i:/r/Shared%20Documents/PcfVedlogic/PCF%20Gender%20Control/Images/female.png?csf=1&web=1&e=lTuRtm',
      imageAlt: 'Female',
      selectedImageSrc: 'https://vedlogicsol.sharepoint.com/:i:/r/Shared%20Documents/PcfVedlogic/PCF%20Gender%20Control/Images/female.png?csf=1&web=1&e=lTuRtm',
      imageSize: { width: 32, height: 32 },
      text: 'Female'
    },
    {
      key: 3,
      imageSrc: 'https://vedlogicsol.sharepoint.com/:i:/r/Shared%20Documents/PcfVedlogic/PCF%20Gender%20Control/Images/other.png?csf=1&web=1&e=Xqb9vP',
      imageAlt: 'Other',
      selectedImageSrc: 'https://vedlogicsol.sharepoint.com/:i:/r/Shared%20Documents/PcfVedlogic/PCF%20Gender%20Control/Images/other.png?csf=1&web=1&e=Xqb9vP',
      imageSize: { width: 32, height: 32 },
      text: 'Other'
    }
  ]

  const onRadioChange = (args, optionvalues) => {
    onChange(optionvalues.key)
  }

  return (
    <>
      <RadioButton
        label=""
        radioOptions={options}
        onControlChange={onRadioChange}
        selectedValue={selectedValue}
      />
    </>
  )
}
export default Gender