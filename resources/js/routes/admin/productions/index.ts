import { queryParams, type QueryParams } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ProductionController::index
 * @see app/Http/Controllers/Admin/ProductionController.php:25
 * @route '/admin/productions'
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
    url: '/admin/productions',
}

/**
* @see \App\Http\Controllers\Admin\ProductionController::index
 * @see app/Http/Controllers/Admin/ProductionController.php:25
 * @route '/admin/productions'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductionController::index
 * @see app/Http/Controllers/Admin/ProductionController.php:25
 * @route '/admin/productions'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductionController::index
 * @see app/Http/Controllers/Admin/ProductionController.php:25
 * @route '/admin/productions'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})
const productions = {
    index,
}

export default productions