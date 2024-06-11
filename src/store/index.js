import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagsSlice from "./bagsSlice";




const myntraStore = configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus :fetchStatusSlice.reducer,
    bags :bagsSlice.reducer,
  }
})
export default myntraStore;