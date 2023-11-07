import { useRoutes } from "react-router-dom";
import Layout from "../components/Layout";
import FolderListPage from "../features/folders/routes/FolderListPage";
import FolderAddPage from "../features/folders/routes/FolderAddPage";
import FolderEditPage from "../features/folders/routes/FolderEditPage";
import CategoryAddPage from "../features/categories/routes/CategoryAddPage";

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <FolderListPage /> },
        { path: "/folders/add", element: <FolderAddPage /> },
        { path: "/folders/edit/:folderId", element: <FolderEditPage /> },
        { path: "/categories/add", element: <CategoryAddPage /> },
      ],
    },
  ];
  const element = useRoutes(routes);
  return <>{element}</>;
}
