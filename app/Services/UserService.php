<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    protected static string $password = 'password';

    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getAllUsers()
    {
        return User::query()
            ->with('roles:id,name')
            ->latest('id')
            ->get();
    }

    public function createUser(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'] ?? self::$password),
        ])->assignRole('operator');
    }

    public function updatePassword(User $user, string $password)
    {
        return tap($user)->update([
            'password' => Hash::make($password)
        ]);
    }

    public function resetPassword(User $user)
    {
        return $this->updatePassword($user, self::$password);
    }
}
