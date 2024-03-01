import { useStoreContext } from "../../../../../../stores";

export const useAdditionalParamsItem = () => {

  const { experimentFormStore } = useStoreContext()

  return {
    method: experimentFormStore.method,
  }

}