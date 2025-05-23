import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Operator\ProductionController::index
 * @see app/Http/Controllers/Operator/ProductionController.php:30
 * @route '/operator/productions'
 */
export const index = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ['get','head'],
    url: '/operator/productions',
}

/**
* @see \App\Http\Controllers\Operator\ProductionController::index
 * @see app/Http/Controllers/Operator/ProductionController.php:30
 * @route '/operator/productions'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\ProductionController::index
 * @see app/Http/Controllers/Operator/ProductionController.php:30
 * @route '/operator/productions'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Operator\ProductionController::index
 * @see app/Http/Controllers/Operator/ProductionController.php:30
 * @route '/operator/productions'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Operator\ProductionController::store
 * @see app/Http/Controllers/Operator/ProductionController.php:45
 * @route '/operator/productions'
 */
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/operator/productions',
}

/**
* @see \App\Http\Controllers\Operator\ProductionController::store
 * @see app/Http/Controllers/Operator/ProductionController.php:45
 * @route '/operator/productions'
 */
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\ProductionController::store
 * @see app/Http/Controllers/Operator/ProductionController.php:45
 * @route '/operator/productions'
 */
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Operator\ProductionController::update
 * @see app/Http/Controllers/Operator/ProductionController.php:56
 * @route '/operator/productions/{production}'
 */
export const update = (args: { production: number | { id: number } } | [production: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ['patch'],
    url: '/operator/productions/{production}',
}

/**
* @see \App\Http\Controllers\Operator\ProductionController::update
 * @see app/Http/Controllers/Operator/ProductionController.php:56
 * @route '/operator/productions/{production}'
 */
update.url = (args: { production: number | { id: number } } | [production: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { production: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { production: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    production: args[0],
                }
    }

    const parsedArgs = {
                        production: typeof args.production === 'object'
                ? args.production.id
                : args.production,
                }

    return update.definition.url
            .replace('{production}', parsedArgs.production.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\ProductionController::update
 * @see app/Http/Controllers/Operator/ProductionController.php:56
 * @route '/operator/productions/{production}'
 */
update.patch = (args: { production: number | { id: number } } | [production: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})
const productions = {
    index,
store,
update,
}

export default productions