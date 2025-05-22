<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\StoreUserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(
        private UserService $userService
    ) {
        //
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('admin/user/Index', [
            'users' => $this->userService->getAllUsers()
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        DB::transaction(function () use ($request) {
            $this->userService->createUser($request->all());

            return to_route('admin.users.index')->withMessage('User berhasil ditambahkan');
        });
    }

    public function resetPassword(Request $request, User $user)
    {
        DB::transaction(function () use ($user) {
            $this->userService->resetPassword($user);

            return to_route('admin.users.index')->withMessage('Password berhasil direset');
        });
    }
}
