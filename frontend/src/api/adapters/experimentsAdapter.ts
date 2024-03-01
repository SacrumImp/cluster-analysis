import { IExperimentParams } from "../../utils/types"

export const prepareExperimentParams = (params: IExperimentParams) => {
  return {
    dataType: params.dataType,
  }
}