import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\UserController::index
* @see app/Http/Controllers/Admin/UserController.php:24
* @route '/admin/users'
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
    url: '/admin/users',
}

/**
* @see \App\Http\Controllers\Admin\UserController::index
* @see app/Http/Controllers/Admin/UserController.php:24
* @route '/admin/users'
*/
index.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UserController::index
* @see app/Http/Controllers/Admin/UserController.php:24
* @route '/admin/users'
*/
index.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\UserController::index
* @see app/Http/Controllers/Admin/UserController.php:24
* @route '/admin/users'
*/
index.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\UserController::store
* @see app/Http/Controllers/Admin/UserController.php:31
* @route '/admin/users'
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
    url: '/admin/users',
}

/**
* @see \App\Http\Controllers\Admin\UserController::store
* @see app/Http/Controllers/Admin/UserController.php:31
* @route '/admin/users'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UserController::store
* @see app/Http/Controllers/Admin/UserController.php:31
* @route '/admin/users'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\UserController::resetPassword
* @see app/Http/Controllers/Admin/UserController.php:40
* @route '/admin/users/{user}/reset-password'
*/
export const resetPassword = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: resetPassword.url(args, options),
    method: 'post',
})

resetPassword.definition = {
    methods: ['post'],
    url: '/admin/users/{user}/reset-password',
}

/**
* @see \App\Http\Controllers\Admin\UserController::resetPassword
* @see app/Http/Controllers/Admin/UserController.php:40
* @route '/admin/users/{user}/reset-password'
*/
resetPassword.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return resetPassword.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UserController::resetPassword
* @see app/Http/Controllers/Admin/UserController.php:40
* @route '/admin/users/{user}/reset-password'
*/
resetPassword.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: resetPassword.url(args, options),
    method: 'post',
})

const UserController = { index, store, resetPassword }

export default UserController