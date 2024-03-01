import { observer } from "mobx-react";
import { Text } from "../../../../../../../../uikit";
import { useWeightedParams } from "./useWeightedParams";

export const SyntheticGenerationParams = observer(() => {
    return (
        <div>
            <Text type="span">
                Slice Value:{' '}
            </Text>
            <input
                type="number"
                value={value}
                onChange={onChange}
            />
      </div>
    ) 
})