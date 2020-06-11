
import Login from './components/Login';
// import Main from './components/Main';
import Controls from './components/Controls';
import SpaceCircles from './components/Spaces/SpaceCircles';
import SpaceList from './components/Spaces/SpaceList';
import SpaceDetail from './components/Spaces/SpaceDetail';
import MapMain from './components/Maps/MapMain';
// import MapLocal from './components/Maps/MapLocal';
// import MapGlobal from './components/Maps/MapGlobal';
// import UserPublic from './components/Users/UserPublic';
import UserProfile from './components/Users/UserProfile';

export const routes = [
    { 
        path: '/signin', 
        component: Login, 
        name: 'signin' 
    },
    {
        path: '/',
        name: 'home',
        components: {
            default: Controls,
            content: SpaceCircles 
        },
    },
    {
        path: '/list',
        name: 'list',
        components: {
            default: Controls,
            content: SpaceList 
        }
    },
    {
        path: '/detail',
        name: 'detail',
        components: {
            default: Controls,
            content: SpaceDetail
        }
    },
    {
        path: '/maps',
        name: 'maps',
        components: {
            default: Controls,
            content: MapMain 
        }
    },
    {
        path: '/user',
        name: 'user',
        components: {
            default: Controls,
            content: UserProfile 
        }
    },
   
    // {
    //     path: '/',
    //     component: Main,
    //     children: [
    //         {
    //             path: 'spaces',
    //             component: SpaceCircles
    //         },
    //         {
    //             path: 'spaces/list',
    //             component: SpaceList
    //         },
    //         {
    //             path: 'spaces/detail',
    //             component: SpaceDetail
    //         },
    //         {
    //             path: 'maps',
    //             component: MapMain
    //         },
    //         {
    //             path: 'user',
    //             component: UserProfile
    //         }
    //     ]
    // },
]