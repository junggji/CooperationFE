import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeLayout } from "./layout/HomeLayout";
import TestMember from "./test/TestMember";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        {/* <Route path="경로명" element={컴포넌트명} /> */}
        {/* 경로가 첫화면일 경우 -> <Route index element={컴포넌트명} /> */}
        <Route path="lalala" element={<TestMember />} />
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
