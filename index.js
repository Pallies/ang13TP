'use strict';
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const util = require('util');
const pluralize = require('pluralize');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

if (argv.included) {

    // Includes one or more many-to-many relationships into `obj`. `resource` is provided for the known side of the association.
    function include(obj, resource, includes) {
        if(util.isNullOrUndefined(obj)) return;

        includes && [].concat(includes)
            .forEach((relationship) => {
                if (router.db.get(relationship).value) {
                    let singularResource = resource.slice(0,resource.length-1);
                    let singularRelationship = pluralize.singular(relationship);

                    let manyMany = null;
                    // this table lookup could be cached

                    if(`${singularResource}_${singularRelationship}` in router.db.__wrapped__) {
                        // e.g. tache_produit
                        manyMany = `${singularResource}_${singularRelationship}`;
                    } else if (`${singularRelationship}_${singularResource}` in router.db.__wrapped__) {
                        // e.g. produit_tache
                        manyMany = `${singularRelationship}_${singularResource}`;
                    } else if (`${resource}_${relationship}` in router.db.__wrapped__) {
                        // e.g. taches_produits
                        manyMany = `${resource}_${relationship}`;
                    } else if (`${relationship}_${resource}` in router.db.__wrapped__) {
                        // e.g. produits_taches
                        manyMany = `${relationship}_${resource}`;
                    }

                    if(manyMany == null) return;

                    // assumes many-many tables are firstId, secondId relations.
                    const relationshipKey = `${singularRelationship}Id`;
                    const resourceKey = `${singularResource}Id`;

                    const joinQuery = {};
                    joinQuery[resourceKey] = obj.id;

                    const items = router.db.get(manyMany).filter(joinQuery).value();

                    if(items===null) {
                        // not found
                        obj[relationship] = [];
                        return;
                    }
                    const ids = items.map((item) => item[relationshipKey]);

                    const related = router.db.get(relationship).filter((elem) => {
                        return ids.includes(elem.id);
                    }).value();

                    obj[relationship] = related;
                }
            });
    }

    // This is fairly generic and should work for almost all endpoints. This could be more intuitive limited to only GET.
    server.use('/:resource/:id*?', (req, res, next) => {
        let _include = req.query._include;
        delete req.query._include;

        // Only apply this middleware if we have a resource and _include query parameter.
        if(_include && req.params.resource && router.db.get(req.params.resource).value) {
            const results = res.locals.data ||
                (req.params.id && router.db.get(req.params.resource).getById(req.params.id).cloneDeep().value()) ||
                router.db.get(req.params.resource).cloneDeep().value();

            results && [].concat(results).forEach((result) => {
                include(result, req.params.resource, _include);
            });

            res.locals.data = results;
            // note: not return next(); because json-server doesn't check for
            // pre-existing res.locals.data, or some other odd behavior.
            return router.render(req,res);
        }
        next();
    });
}

server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running')
})
