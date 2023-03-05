import Blog from "./pages/Blog/Blog"
import BlogLayout from "./pages/Blog/BlogLayout"
import Categories from "./pages/Blog/Categories"
import Post from "./pages/Blog/Post"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import HomeLayout from "./pages/HomeLayout"

const routes = [
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'blog',
                element: <BlogLayout/>,
                children: [
                    {
                        index: true,
                        element: <Blog/>
                    },
                    {
                        path: 'categories',
                        element: <Categories/>
                    },
                    {
                        path: 'post/:id',
                        element: <Post/>
                    }
                ]
            }
        ]
    },
]

export default routes;