import {configureStore} from '@reduxjs/toolkit';
import globalReducer from '../reducers/app/global';

export default configureStore({
    reducer: {
        global: globalReducer
    }
});