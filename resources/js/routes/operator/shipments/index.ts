import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Operator\ShipmentController::index
* @see app/Http/Controllers/Operator/ShipmentController.php:22
* @route '/operator/shipments'
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
    url: '/operator/shipments',
}

/**
* @see \App\Http\Controllers\Operator\ShipmentController::index
* @see app/Http/Controllers/Operator/ShipmentController.php:22
* @route '/operator/shipments'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\ShipmentController::index
* @see app/Http/Controllers/Operator/ShipmentController.php:22
* @route '/operator/shipments'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Operator\ShipmentController::index
* @see app/Http/Controllers/Operator/ShipmentController.php:22
* @route '/operator/shipments'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Operator\ShipmentController::store
* @see app/Http/Controllers/Operator/ShipmentController.php:32
* @route '/operator/shipments'
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
    url: '/operator/shipments',
}

/**
* @see \App\Http\Controllers\Operator\ShipmentController::store
* @see app/Http/Controllers/Operator/ShipmentController.php:32
* @route '/operator/shipments'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\ShipmentController::store
* @see app/Http/Controllers/Operator/ShipmentController.php:32
* @route '/operator/shipments'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

const shipments = {
    index,
    store,
}

export default shipments