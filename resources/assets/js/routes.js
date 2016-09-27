export default function routeConfig(router) {

    router.map({      
        '/': {
            name: 'layout',
            component: (resolve) => {require(['./views/layout'], resolve)}         
        }
    });

    router.redirect({
        // '*': '/login'     
    });

    router.beforeEach(function (transition) {       
        transition.next();
    });

}