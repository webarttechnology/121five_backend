<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Payment;
use App\Models\Subscription;
use App\Models\Sponsor;

class PaymentController extends Controller
{
    public function Payment(){
        return response()-> json(Payment::where('subscription_id', '<>', 1) -> with('Sponsor') ->with('subscription')->get(), 200);
    }

    public function PaymentById($id){
        return response()-> json(Payment::with('sponsor')->find($id), 200);
    }

    public function PaymentSave(Request $request){         
        $insertData['sponsor_id'] = $request -> input('sponsor_id');
        $insertData['subscription_id'] = $request -> input('subscription_id');
        $s__d = Subscription::orderBy('id', 'desc') -> where('id', $request -> input('subscription_id'));   
        $u__d = Sponsor::where('id', $request -> input('sponsor_id')); 
        
        if($u__d -> count()){
        if($s__d -> count()){
            $s__data = $s__d -> first();
            $insertData['valid_for'] = $s__data -> valid_for;
            $insertData['booking_date'] = date('Y-m-d', time());
            $insertData['expiry_date'] = date("Y-m-d", time() + ($s__data -> valid_for * 30 * 24*3600));
            $insertData['is_paid'] = 0;  
            $insertData['max_post'] = $s__data -> total_post;    
            $insertData['amount'] = $s__data -> price;  
            $insertData['payment_date'] = date('Y-m-d', time());
            $Payment = Payment::create($insertData);
            return response()-> json($Payment, 201);
        }else{
            return response()-> json(["message"=>"Subscription plan does not match"], 200);
        }
    }else{
        return response()-> json(["message"=>"Sponsor id does not match"], 200); 
    }
       
    }

    public function PaymentUpdate(Request $request, $id){
        $Payment = Payment::find($id);
        // $Payment -> plan_name = $request-> plan_name;
        // $Payment -> total_post = $request -> total_post;
        $Payment -> amount = $request-> price;
        $Payment -> expiry_date = $request -> expiry_date;
        $Payment -> is_paid = $request -> is_paid;
        $Payment -> save();
        return response()-> json($Payment, 201);
    }

    public function PaymentDelete($id){
        $Payment = Payment::find($id);
        $Payment -> delete();
    }
}