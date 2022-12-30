import { useRoutes } from "react-router-dom";

import ThemeRoutes from "./routes/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/slices/usersSlice";
import { fetchInitialData } from "./redux/slices/generalSlice";

export default function App() {
    const { isSiteLoading } = useSelector((state) => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
        dispatch(fetchInitialData());
    }, []);

    const routing = useRoutes(ThemeRoutes);
    return isSiteLoading ? <div>Loading...</div> : routing;
}
