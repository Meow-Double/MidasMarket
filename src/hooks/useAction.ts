import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ItemActionCreators from "../store/actions";

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ItemActionCreators, dispatch);
};

export default useAction;