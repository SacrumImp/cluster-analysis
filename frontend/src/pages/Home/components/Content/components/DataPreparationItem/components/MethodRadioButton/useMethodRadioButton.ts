import { ChangeEvent } from "react";
import { EMethods } from "../../types";
import { useStoreContext } from "../../../../../../../../stores";

export const useMethodRadioButton = () => {

  const { experimentFormStore } = useStoreContext()

  const handleMethodChange = (event: ChangeEvent<HTMLInputElement>) => {
    experimentFormStore.setMethod(event.target.value as EMethods);
  };

  return {
    selectedValue: experimentFormStore.method,
    handleMethodChange,
  }

}