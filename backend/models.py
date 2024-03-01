from pydantic import BaseModel

class ExperimentParams(BaseModel):
  dataType: int