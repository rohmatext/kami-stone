import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Operator\DashboardController::index
 * @see app/Http/Controllers/Operator/DashboardController.php:11
 * @route '/operator'
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
    url: '/operator',
}

/**
* @see \App\Http\Controllers\Operator\DashboardController::index
 * @see app/Http/Controllers/Operator/DashboardController.php:11
 * @route '/operator'
 */
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Operator\DashboardController::index
 * @see app/Http/Controllers/Operator/DashboardController.php:11
 * @route '/operator'
 */
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Operator\DashboardController::index
 * @see app/Http/Controllers/Operator/DashboardController.php:11
 * @route '/operator'
 */
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})
const DashboardController = { index }

export default DashboardController