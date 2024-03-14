import { DataUtil } from "../_utils/index";

export const resetComponent = (): void => {

    let instanceArray = DataUtil.getAllInstancesByKey("menu");

    instanceArray.forEach(
        instance => console.log(instance)
        )

}

export default { resetComponent };