<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Sponsor;

class UserController extends Controller
{    
    public function register(Request $request){      
        $registerData = [
            'name' => $request -> input('name'),
            'email' => $request -> input('email'),
            'password' => Hash::make($request -> input('password')),
            'email_verified_at' => date('Y-m-d H:i:s', time()),
            'role_id' => 2,
            'remember_token' => $request -> input('remember_token')
        ];
        $Register = User::create($registerData);
        return response()->json($Register, 201);
    }

    public function login(Request $request){
        $Register = User::where(['email' => $request -> input('email')])->first();
        if($Register != ''):
            if(Hash::check($request -> input('password'), $Register['password'])):
                $token_code = rand(1000, 9999);
                $Register = User::find($Register['id']);
                $Register -> remember_token = $token_code;
                $Register -> save();                
                $request->session()->put('Authorization', $token_code);
                return response()->json($Register, 201);
            else:
                return response()->json(['message'=> 'Password does not match.'], 200);
            endif;        
        else:
            return response()->json(['message'=> 'Email ID does not match.'], 200);
        endif;
    }
}
