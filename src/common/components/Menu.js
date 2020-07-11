import {
    Dashboard, Assignment, Person, School, Grain,
    ExitToApp, SupervisedUserCircle, BarChart, AccountBalance,
    Business, AddCircle, ViewList, LockOutlined, AccountTree
} from '@material-ui/icons'

const AppMenu = [
    {
        listIcon: Dashboard,
        listText: 'Home',
        routePath: '/home',
        appTitle: 'Home',
        needAuth: false
    },
    {
        listIcon: Dashboard,
        listText: 'Dashboard',
        routePath: '/dashboard',
        appTitle: 'Dashboard',
        needAuth: true
    },
    {
        listIcon: Assignment,
        listText: 'Class',
        routePath: '/classes',
        subMenus: [
            {
                listIcon: ViewList,
                text: "All Class",
                routePath: '/classes',
                needAuth: true
            }, {
                listIcon: AddCircle,
                text: "Add Class",
                routePath: '/classes/add',
                needAuth: true
            }],
        appTitle: 'Class Management',
        needAuth: true
    },
    {
        listIcon: School,
        listText: 'Student',
        routePath: '/students',
        subMenus: [
            {
                listIcon: ViewList,
                text: "All Students",
                routePath: '/students',
                needAuth: true
            }, {
                listIcon: AddCircle,
                text: "Add Student",
                routePath: '/students/add',
                needAuth: true
            }],
        appTitle: 'Student Management',
        needAuth: true
    },
    {
        listIcon: Person,
        listText: 'Staff',
        routePath: '/staffs',
        subMenus: [
            {
                listIcon: ViewList,
                text: "All Staffs",
                routePath: '/students',
                needAuth: true
            }, {
                listIcon: AddCircle,
                text: "Add Staff",
                routePath: '/students/add',
                needAuth: true
            }],
        appTitle: 'Staff Management',
        needAuth: true
    },
    {
        listIcon: SupervisedUserCircle,
        listText: 'Parents',
        routePath: '/parents',
        subMenus: [
            {
                listIcon: ViewList,
                text: "All Parents",
                routePath: '/parents',
                needAuth: true
            }, {
                listIcon: BarChart,
                text: "Report",
                routePath: '/parents/report',
                needAuth: true
            }],
        appTitle: 'Staff Management',
        needAuth: true,
    },
    {
        listIcon: Grain,
        listText: 'Administration',
        routePath: '/administration',
        subMenus: [
            {
                listIcon: AccountBalance,
                text: "School",
                routePath: "/school",
                needAuth: true
            },
            {
                listIcon: Business,
                text: "Facilities",
                routePath: "/facilities",
                needAuth: true
            },
            {
                listIcon: Grain,
                text: "Batch",
                routePath: "/batch",
                needAuth: true
            },
            {
                listIcon: AccountTree,
                text: "Grade",
                routePath: "/grade",
                needAuth: true
            },
            {
                listIcon: AccountTree,
                text: "Admissions",
                routePath: "/manage/admissions",
                needAuth: true
            }
        ],
        appTitle: 'Administration',
        needAuth: true
    },
    {
        listIcon: ExitToApp,
        listText: 'Exit',
        routePath: '/logout',
        needAuth: true
    },
    {
        listIcon: LockOutlined,
        listText: 'Login',
        routePath: '/signin',
        appTitle: 'Sign In',
        needAuth: false,
        exclAuth: true
    }
]

export default AppMenu