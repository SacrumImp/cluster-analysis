import { FC } from "react";
import {
  Button,
  Spinner,
} from "../../../../../../../../uikit";
import "./styles.scss";

export interface IPerformCalculationsButtonProps {
  isLoading?: boolean,
  disabled?: boolean,
  onClick: () => void,
}

const getContent = (isLoading: boolean) => {
  if (isLoading) {
    return (
      <span>
        Perform calculations
        <span className="perform-calculations-button__spiner">
          <Spinner size="sm" />
        </span>
      </span>
    )
  }
  return (
    <span>
      Perform calculations
    </span>
  )
}

export const PerformCalculationsButton:FC<IPerformCalculationsButtonProps> = (props) => {

  const {
    disabled = false,
    isLoading = false,
    onClick,
  } = props
  
  return (
    <p>
      <Button
        variant='primary'
        onClick={onClick}
        disabled={disabled}
      >
        {getContent(isLoading)}
      </Button>
    </p>
  )

}