<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    public function Company()
    {
        return response()->json(Company::get(), 200);
    }

    public function CompanyById($id)
    {
        return response()->json(Company::find($id), 200);
    }

    public function CompanyUpdate(Request $request)
    {
        $Company = Company::find($request -> input('update_id'));
        if($request->file('image')){
            $image = $request -> all('image');   
            $file_name = $image['image'];
            $imageName = time().'.'.$file_name->getClientOriginalExtension();
            $file_name->move(public_path().'/uploads/', $imageName);

            $Company -> fill([
                'name' => $request->input('name'),
                'contact_no' => $request->input('conact_no'),
                'email_id' => $request->input('email_id'),
                'logo' => 'uploads/'.$imageName,
                'facebook' => $request->input('facebook'),
                'linkdin' => $request->input('linkdin'),
                'twitter' => $request->input('twitter'),
            ]);            

        }else{
            $Company -> fill([
                'name' => $request->input('name'),
                'contact_no' => $request->input('conact_no'),
                'email_id' => $request->input('email_id'),
                'facebook' => $request->input('facebook'),
                'linkdin' => $request->input('linkdin'),
                'twitter' => $request->input('twitter')
            ]); 
        }

        $Company->save();
        return response()->json($Company, 201);
    }

}
