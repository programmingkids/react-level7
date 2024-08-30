import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DispatchContext } from "./../providers/DispatchContext";

export const ExpenseDeleteData = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "deleteExpense",
      payload: {
        id: parseInt(id),
      },
    });
    navigate("/");
  }, []);

  return "";
};
