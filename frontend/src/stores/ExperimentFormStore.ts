import { makeAutoObservable } from "mobx";
import { EMethods } from "../pages/Home/components/Content/components/DataPreparationItem/types";

class ExperimentFormStore {

  private _method: EMethods = EMethods.SyntheticGeneration;

  constructor() {
    makeAutoObservable(this);
  }

  get method(): EMethods {
    return this._method
  }

  setMethod = (value: EMethods) => {
    this._method = value
  }
}

export const experimentFormStore = new ExperimentFormStore();