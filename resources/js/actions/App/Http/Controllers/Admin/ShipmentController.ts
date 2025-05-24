import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ShipmentController::index
* @see app/Http/Controllers/Admin/ShipmentController.php:18
* @route '/admin/shipments'
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
    url: '/admin/shipments',
}

/**
* @see \App\Http\Controllers\Admin\ShipmentController::index
* @see app/Http/Controllers/Admin/ShipmentController.php:18
* @route '/admin/shipments'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ShipmentController::index
* @see app/Http/Controllers/Admin/ShipmentController.php:18
* @route '/admin/shipments'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ShipmentController::index
* @see app/Http/Controllers/Admin/ShipmentController.php:18
* @route '/admin/shipments'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

const ShipmentController = { index }

export default ShipmentController