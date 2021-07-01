/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/
import admins from '@/navigation/vertical/admin/admins'
import categories from '@/navigation/vertical/admin/categories'
import appsAndPages from './admin/apps-and-pages'

// import dashboard from './dashboard'
// import others from './others'
// import chartsAndMaps from './charts-and-maps'
// import uiElements from './ui-elements'
// import formAndTable from './forms-and-table'

// Array of sections
export default [...admins, ...appsAndPages, ...categories]
// export default [...admins, ...dashboard, ...appsAndPages, ...uiElements, ...formAndTable, ...chartsAndMaps, ...others]
