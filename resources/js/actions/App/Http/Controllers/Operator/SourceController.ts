import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Operator\SourceController::index
* @see app/Http/Controllers/Operator/SourceController.php:24
* @route '/operator/sources'
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
    url: '/operator/sources',
}

/**
* @see \App\Http\Controllers\Operator\SourceController::index
* @see app/Http/Controllers/Operator/SourceController.php:24
* @route '/operator/sources'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\SourceController::index
* @see app/Http/Controllers/Operator/SourceController.php:24
* @route '/operator/sources'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Operator\SourceController::index
* @see app/Http/Controllers/Operator/SourceController.php:24
* @route '/operator/sources'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Operator\SourceController::store
* @see app/Http/Controllers/Operator/SourceController.php:34
* @route '/operator/sources'
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
    url: '/operator/sources',
}

/**
* @see \App\Http\Controllers\Operator\SourceController::store
* @see app/Http/Controllers/Operator/SourceController.php:34
* @route '/operator/sources'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\SourceController::store
* @see app/Http/Controllers/Operator/SourceController.php:34
* @route '/operator/sources'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Operator\SourceController::update
* @see app/Http/Controllers/Operator/SourceController.php:46
* @route '/operator/sources/{source}'
*/
export const update = (args: { source: number | { id: number } } | [source: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ['patch'],
    url: '/operator/sources/{source}',
}

/**
* @see \App\Http\Controllers\Operator\SourceController::update
* @see app/Http/Controllers/Operator/SourceController.php:46
* @route '/operator/sources/{source}'
*/
update.url = (args: { source: number | { id: number } } | [source: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { source: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { source: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            source: args[0],
        }
    }

    const parsedArgs = {
        source: typeof args.source === 'object'
        ? args.source.id
        : args.source,
    }

    return update.definition.url
            .replace('{source}', parsedArgs.source.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\SourceController::update
* @see app/Http/Controllers/Operator/SourceController.php:46
* @route '/operator/sources/{source}'
*/
update.patch = (args: { source: number | { id: number } } | [source: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Operator\SourceController::inactivate
* @see app/Http/Controllers/Operator/SourceController.php:55
* @route '/operator/sources/{source}/inactivate'
*/
export const inactivate = (args: { source: number | { id: number } } | [source: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: inactivate.url(args, options),
    method: 'patch',
})

inactivate.definition = {
    methods: ['patch'],
    url: '/operator/sources/{source}/inactivate',
}

/**
* @see \App\Http\Controllers\Operator\SourceController::inactivate
* @see app/Http/Controllers/Operator/SourceController.php:55
* @route '/operator/sources/{source}/inactivate'
*/
inactivate.url = (args: { source: number | { id: number } } | [source: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { source: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { source: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            source: args[0],
        }
    }

    const parsedArgs = {
        source: typeof args.source === 'object'
        ? args.source.id
        : args.source,
    }

    return inactivate.definition.url
            .replace('{source}', parsedArgs.source.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\SourceController::inactivate
* @see app/Http/Controllers/Operator/SourceController.php:55
* @route '/operator/sources/{source}/inactivate'
*/
inactivate.patch = (args: { source: number | { id: number } } | [source: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'patch',
} => ({
    url: inactivate.url(args, options),
    method: 'patch',
})

const SourceController = { index, store, update, inactivate }

export default SourceController