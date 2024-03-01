import { useState } from "react";
import {
  EApiRoutes,
  axiosInstance,
  prepareExperimentParams,
} from "../../../../../../api";
import { useStoreContext } from "../../../../../../stores";

export const useResultItem = () => {

  const {
    experimentFormStore,
  } = useStoreContext()
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    setIsLoading(true)
    const structureParams = prepareExperimentParams({
      dataType: Number(experimentFormStore.method),
    })
    try {
      const { data } = await axiosInstance.post(EApiRoutes.perform_experiment, structureParams)
    }
    catch {
    }
    finally {
      setIsLoading(false)
    }
  }
  
  return {
    onClick,
    isLoading,
  }

}