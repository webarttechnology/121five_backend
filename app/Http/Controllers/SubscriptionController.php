<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Subscription;

class SubscriptionController extends Controller
{
    public function Subscription(){
        return response()-> json(Subscription::where('id', '<>', 1) -> get(), 200);
    }

    public function SubscriptionById($id){
        return response()-> json(Subscription::find($id), 200);
    }

    public function SubscriptionSave(Request $request){    
        $Subscription = Subscription::create($request -> all());
        return response()-> json($Subscription, 201);
    }

    public function SubscriptionUpdate(Request $request, $id){
        $Subscription = Subscription::find($id);
        $Subscription -> plan_name = $request-> plan_name;
        $Subscription -> total_post = $request -> total_post;
        $Subscription -> price = $request-> price;
        $Subscription -> valid_for = $request -> valid_for;
        $Subscription -> save();
        return response()-> json($Subscription, 201);
    }

    public function SubscriptionDelete($id){
        $Subscription = Subscription::find($id);
        $Subscription -> delete();
    }
}