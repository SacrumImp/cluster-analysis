import { EMethods } from "../../types"
import { MethodRadioButton } from "../MethodRadioButton"

export const SyntheticGeneration = () => {
  return (
    <MethodRadioButton
      method={EMethods.SyntheticGeneration}
      methodDescription={'Synthetic generation of the data'}
    />
  )
}