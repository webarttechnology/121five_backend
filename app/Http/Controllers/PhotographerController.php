<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Photographer;

class PhotographerController extends Controller
{
    
    public function Photographer()
    {
        
        return response()->json(Photographer::where('company_name', '<>', '')->with('gallery')->get(), 200);
    }

    public function PhotographerById($id)
    {
        return response()->json(Photographer::find($id), 200);
    }

    public function PhotographerSave(Request $request)
    {        
           if(Photographer::where('email_id', $request -> input('email_id')) -> count() == 0){
            $registerdata = [
                'name' => $request -> input('name')?$request -> input('name'):'',
                'email_id' => $request -> input('email_id')?$request -> input('email_id'):'',
                'mobile_no' => $request -> input('mobile_no')?$request -> input('mobile_no'):'',
                'company_name' => $request -> input('company_name')?$request -> input('company_name'):'',
                'address' => $request -> input('address')?$request -> input('address'):'',
                'url' => $request -> input('url')?$request -> input('url'):''
            ];
    
            $Photographer = Photographer::create($registerdata);
            return response()->json($Photographer, 201);    
           }else{
            return response()->json('Email ID already registered', 200);
           }    
    }

    public function PhotographerUpdate(Request $request, $id)
    {      
        if(Photographer::where('email_id', $request -> input('email_id')) -> where('id', '<>', $id) -> count() == 0){            
        $Photographer = Photographer::find($id);
        $Photographer -> name = $request -> name;
        $Photographer->company_name = $request->company_name;
        $Photographer->email_id = $request->email_id;
        $Photographer -> mobile_no = $request -> mobile_no;
        $Photographer -> address = $request -> address;
        $Photographer -> url = $request -> url;
        $Photographer->save();
        return response()->json($Photographer, 201);
        }else{
            return response()->json('Email ID already registered', 200);
        }
    }

    public function PhotographerDelete($id)
    {
        $Photographer = Photographer::find($id);
        $Photographer->delete();
    }

    public function login(Request $request){
        $Register = Photographer::where(['email_id' => $request -> input('email')])->first();
        if($Register != ''):
            if(Hash::check($request -> input('password'), $Register['password'])):
                $Register = Photographer::find($Register['id']);                           
                $s__count = Photographer::where(['id' => $Register['id'], 'company_name' => ''])->count();
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
