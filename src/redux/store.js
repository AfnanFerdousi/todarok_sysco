import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
export default store;


