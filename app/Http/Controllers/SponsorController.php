<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Sponsor;
use App\Models\Payment;
use App\Models\Subscription;

use Illuminate\Support\Facades\Validator;

class SponsorController extends Controller
{

    public function SponsorCount(){
        return response() -> json(Sponsor::where('is_active', 1)-> count());
    }

    public function Sponsor()
    {
        return response()->json(Sponsor::where('company_name', '<>', '')->get(), 200);
    }

    public function SponsorById($id)
    {
        return response()->json(Sponsor::find($id), 200);
    }

    public function SponsorSave(Request $request)
    {        
           if(Sponsor::where('email_id', $request -> input('email_id')) -> count() == 0){
            $registerdata = [
                'name' => $request -> input('name')?$request -> input('name'):'',
                'email_id' => $request -> input('email_id')?$request -> input('email_id'):'',
                'mobile_no' => $request -> input('mobile_no')?$request -> input('mobile_no'):'',
                'password' => Hash::make($request -> input('password')),
                'new_password' => $request -> input('password'),
                'company_name' => $request -> input('company_name')?$request -> input('company_name'):'',
                'address' => $request -> input('address')?$request -> input('address'):'',
                'url' => $request -> input('url')?$request -> input('url'):'',
                'is_active' => 0,
            ];
    
            $registerdata['password'] = Hash::make($request -> input('password'));
            $Sponsor = Sponsor::create($registerdata);

            // Free subscription plan 


            $insertData['sponsor_id'] = $Sponsor -> id;
            $insertData['subscription_id'] = 1;

            $s__d = Subscription::orderBy('id', 'desc') -> where('id', 1);
            $s__data = $s__d -> first();
            $insertData['valid_for'] = $s__data -> valid_for;
            $insertData['booking_date'] = date('Y-m-d', time());
            $insertData['expiry_date'] = date("Y-m-d", time() + ($s__data -> valid_for * 30 * 24*3600));
            $insertData['is_paid'] = 1;  
            $insertData['max_post'] = $s__data -> total_post;    
            $insertData['amount'] = $s__data -> price;  
            $insertData['payment_date'] = date('Y-m-d', time());
            $Payment = Payment::create($insertData);


            





            
            return response()->json($Sponsor, 201);    
           }else{
            return response()->json('Email ID already registered', 200);
           }    
    }

    public function SponsorUpdate(Request $request, $id)
    {
       
      
        //if(Sponsor::where('email_id', $request -> input('email_id')) -> where('id', '<>', $id) -> count() == 0){
            
        $Sponsor = Sponsor::find($id);

        $Sponsor -> name = $request -> name;

        if($request -> password != ''){
            $Sponsor -> password = Hash::make($request -> input('password'));
        }
        $Sponsor->company_name = $request->company_name;
        $Sponsor->email_id = $request->email_id;
        $Sponsor -> mobile_no = $request -> mobile_no;
        $Sponsor -> address = $request -> address;
        $Sponsor -> new_password = $request -> password;
        $Sponsor -> is_active = $request -> is_active;
        
        $Sponsor -> url = $request -> url;
        $Sponsor->save();
        return response()->json($Sponsor, 201);
    // }else{
    //     return response()->json('Hello', 200);
    // }
    }

    public function SponsorDelete($id)
    {
        $Sponsor = Sponsor::find($id);
        $Sponsor->delete();
    }

    public function login(Request $request){
        $Register = Sponsor::where(['email_id' => $request -> input('email')])->first();
        if($Register != ''):            
            if(Hash::check($request -> input('password'), $Register['password'])):
                $Register = Sponsor::find($Register['id']);                           
                $s__count = Sponsor::where(['id' => $Register['id'], 'company_name' => ''])->count();
                $Register['company_not_exist'] = $s__count;
                return response()->json($Register, 201);
            else:
                return response()->json(['message'=> 'Password does not match.'], 200);
            endif;        
        else:
            return response()->json(['message'=> 'Email ID does not match.'], 200);
        endif;
    }

}