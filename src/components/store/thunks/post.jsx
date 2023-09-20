import axios from "axios";
import { getDataRequest, getDataSucces, getDataFailure } from '../slices/posts';

export const getData = () => async (dispatch) => {
    try{
        dispatch(getDataRequest());
        const responsive = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(getDataSucces(responsive.data));
    } catch (error){
        dispatch(getDataFailure(error.message))
    }
}