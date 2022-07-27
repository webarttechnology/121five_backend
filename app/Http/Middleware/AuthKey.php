<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $token_code = $request -> header('Authorization');

        if($request -> segment(2) == 'login' || $request -> segment(2) == 'register' || $request -> segment(2) == 'sponsor-login'|$request -> segment(2) == 'sponsor'){
            return $next($request);
        }else{
            // if($token_code != 'ABCDEFGHIJK'){
            //     return response()-> json(['message' => 'Auth error', 'login_status' => false], 200);
            //     die;
            // }
            return $next($request);
        }
        
        
    }
}
